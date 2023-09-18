import { useState } from "react";
import photos from "../mocks/photos"
const useApplicationData = () =>{
    //set state for modal to false as its default state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [photoSelected, setPhotoSelected] = useState(null);
    const [favorites, setFavorites] = useState([]);


    const toggleFavorite = (id) => {
      //if id in arr, remove, else add
      if (favorites.includes(id)) {
        return setFavorites(favorites.filter((photoId) => photoId !== id));
      }
      //add the photo id to the array
      setFavorites([...favorites, id]);
    };
  
  
    //function to open modal when photo is clicked
    const onPhotoClick = (id) => {
      setIsModalOpen(true);
      const selectedPhoto = photos.find(photo => photo.id === id);
      setPhotoSelected(selectedPhoto);
   
    };
  
    
    //function to close modal when x is clicked
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return {
      isModalOpen,
      setIsModalOpen,
      photoSelected,
      setPhotoSelected,
      favorites,
      setFavorites,
      toggleFavorite,
      onPhotoClick,
      closeModal,
    }
}

export default useApplicationData;