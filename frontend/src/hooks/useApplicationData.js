import { useReducer, useEffect } from "react";

//default states
const defaultState = {
  isModalOpen: false,
  photoSelected: null,
  favorites: [],
  photos: [],
  topics: [],
  topic: [],
};

//actions
const ACTIONS = {
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  ON_PHOTO_CLICK: "ON_TOGGLE_FAVORITE",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

//reducer function
const reducer = (state, action) => {
  //fetch different image categories when users
  //click on specific photo topics in the top navigation
  if (action.type === ACTIONS.GET_PHOTOS_BY_TOPICS) {
    return { ...state, topic: action.payload };
  }

  //set topics state to topics fetched from api
  if (action.type === ACTIONS.SET_TOPIC_DATA) {
    return { ...state, topics: action.payload };
  }

  //Set photos state to pictures fetched from api
  if (action.type === ACTIONS.SET_PHOTO_DATA) {
    return { ...state, photos: action.payload };
  }
  //set isModalOpen state to false
  if (action.type === ACTIONS.CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }
  //set isModalOpen state to true && photoSelected default state
  //to the photoObject with that id
  if (action.type === ACTIONS.ON_PHOTO_CLICK) {
    const selectedPhoto = state.photos.find(
      (photo) => photo.id === action.payload.id
    );
    return { ...state, isModalOpen: true, photoSelected: selectedPhoto };
  }
  //set favorites state to the returned array
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

  //fetch photos by topics
  const getPhotosByTopic = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
      })
      .catch((error) => {
        new Error(`Error fetching photos for topic${id}: ${error}`);
        return [];
      });
  };

  //fetches topics from api and dispatch the topics as payload to function reducer
  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      });
  }, []);

  //fetches photos and dispatch the photos as a payload to function reducer
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      });
  }, []);

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
    getPhotosByTopic,
  };
};

export default useApplicationData;
