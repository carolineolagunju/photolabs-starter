import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";


// Note: Rendering a single component to build components in isolation
const App = () => {
  
    const {
      // isModalOpen,
      // photoSelected,
      // favorites,
      state,
      toggleFavorite,
      onPhotoClick,
      closeModal,
    } = useApplicationData();


  const {isModalOpen, photoSelected, favorites} = state;
 
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={onPhotoClick}  favorites={favorites} toggleFavorite={toggleFavorite}/>
      {isModalOpen && (
        <PhotoDetailsModal closeModal={closeModal} photoSelected={photoSelected}  toggleFavorite={toggleFavorite} favorites={favorites}/>
      )}
    </div>
  );
};

export default App;


// import React from "react";
// import "./App.scss";
// import HomeRoute from "routes/HomeRoute";
// import photos from "./mocks/photos";
// import topics from "./mocks/topics";
// import PhotoDetailsModal from "routes/PhotoDetailsModal";
// import useApplicationData, { ACTIONS } from "hooks/useApplicationData";

// const App = () => {
//   const {
//     state, // This includes isModalOpen, photoSelected, favorites
//     toggleFavorite,
//     onPhotoClick,
//     closeModal,
//     dispatch // This is the function to dispatch actions
//   } = useApplicationData();

//   const { isModalOpen, photoSelected, favorites } = state;

//   return (
//     <div className="App">
//       <HomeRoute
//         photos={photos}
//         topics={topics}
//         onPhotoClick={onPhotoClick}
//         favorites={favorites}
//         toggleFavorite={toggleFavorite}
//       />
//       {isModalOpen && (
//         <PhotoDetailsModal
//           closeModal={closeModal}
//           photoSelected={photoSelected}
//           toggleFavorite={(id) =>
//             dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { id } })
//           }
//           favorites={favorites}
//         />
//       )}
//     </div>
//   );
// };

// export default App;