import { useReducer } from "react";
import photos from "../mocks/photos";

//default states
const defaultState = {
  isModalOpen: false,
  photoSelected: null,
  favorites: [],
};

//actions
const ACTIONS = {
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  ON_PHOTO_CLICK: "ON_TOGGLE_FAVORITE",
};

//reducer function
const reducer = (state, action) => {
  //set isModalOpen default state to false
  if (action.type === ACTIONS.CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }
  //set isModalOpen default state to true && photoSelected default state
  //to the photoObject with that id
  if (action.type === ACTIONS.ON_PHOTO_CLICK) {
    const selectedPhoto = photos.find(
      (photo) => photo.id === action.payload.id
    );
    return { ...state, isModalOpen: true, photoSelected: selectedPhoto };
  }
  //set favorites default state to the returned array
  //this loigc is used to control the favIcon. when the favIcon is deselected, the logic removes the id of
  //that picture from the favorites array  else it adds it to the favorites array
  if (action.type === ACTIONS.TOGGLE_FAVORITE) {
    if (state.favorites.includes(action.payload.id)) {
      return {
        ...state,
        favorites: state.favorites.filter(
          (photoId) => photoId !== action.payload.id
        ),
      };
    } else {
      return { ...state, favorites: [...state.favorites, action.payload.id] };
    }
  }
  //error handling
  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
};

const useApplicationData = () => {
  //using useReducer to set state
  const [state, dispatch] = useReducer(reducer, defaultState);

  //function to trigger when favorite is selected and deselected
  const toggleFavorite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { id } });
  };

  //function to open modal when photo is clicked
  const onPhotoClick = (id) => {
    dispatch({ type: ACTIONS.ON_PHOTO_CLICK, payload: { id } });
  };

  //function to close modal when x is clicked
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    toggleFavorite,
    onPhotoClick,
    closeModal,
  };
};

export default useApplicationData;
