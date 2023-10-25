import getGeneralRandomDogs from "@utils/getGeneralRandomDogs";
import getFavouritesDogs from "@utils/getFavouritesDogs";
import getPureBredDogs from "@utils/getPureBredRandomDogs";
import setFavouritesDogs from "@utils/setFavoureDog";
import deleteFavouritesDogs from "@utils/deleteFavouriteDog";
import deleteUploadedDog from "@utils/deleteUploadedDog";

import uploadDoggie from "@utils/uploadDogPic";
import renderUpploadedDog from "@utils/renderUploadedDog";
import getUploadedDogs from "@utils/getUploadedDogs";

import pureBredDogsData from "@utils/pureBredDogsData";

const pureBredDogsButton = null || document.querySelector('.functions-aside .search-section .search-breds-form .search-btn');
const reloadRandomDogsButton = null || document.querySelector('.random-dogs .random-dogs--header .header--controll-buttons .reload-dog');
const uploadDogForm = null || document.querySelector('.functions-aside > .uploading-section > .uploading-form');
const uploadDogButton = null || document.querySelector('.functions-aside > .uploading-section > .uploading-form > .send-doggie');
const uploadedDogsList = null || document.querySelector('.functions-aside > .uploading-section > .uploaded-dogs .dogs-list');
const randomDogsList = null || document.querySelector('section.random-dogs > .list-wrapper ul.dogs-list');
const favouriteDogsList = null || document.querySelector('section.favourite-dogs > .list-wrapper ul.dogs-list');



(async function App() { 
    window.addEventListener("load", () => {
        getGeneralRandomDogs();
        getFavouritesDogs();
        pureBredDogsData();
        getUploadedDogs();
    });

    reloadRandomDogsButton.addEventListener("click", getGeneralRandomDogs);
    pureBredDogsButton.addEventListener("click", getPureBredDogs);
    uploadDogButton.addEventListener("click", uploadDoggie);

    uploadDogForm.addEventListener('change', (e) => {
        if (e.target.classList.contains("doggie-file")) {
            renderUpploadedDog({ input: e.target });
        }
    });

    uploadedDogsList.addEventListener("click", (e) => {
        if (e.target.classList.contains('info__button')) {
            let id = e.target.parentNode.getAttribute("data-id");
            
            if (e.target.classList.contains('delete-btn')) {
                deleteUploadedDog({ dogId: id });
            }

            if (e.target.classList.contains("favorite-btn")) {
                setFavouritesDogs({ dogId: id });
            }
        }
    });

    randomDogsList.addEventListener('click', (e) => {
        if (e.target.classList.contains("favourite-btn")) {
            let id = e.target.parentNode.getAttribute("data-id");
            setFavouritesDogs({ dogId: id });
        }
    });   
    
    favouriteDogsList.addEventListener('click', (e) => {
        if (e.target.classList.contains("favourite-btn")) {
            let id = e.target.parentNode.getAttribute("data-id");
            deleteFavouritesDogs({ dogId: id });
        }
    });
})()