import getGeneralRandomDogs from "@utils/getGeneralRandomDogs";
import getFavouritesDogs from "@utils/getFavouritesDogs";
import getPureBredDogs from "@utils/getPureBredRandomDogs";
import setFavouritesDogs from "@utils/setFavoureDog";
import deleteFavouritesDogs from "@utils/deleteFavouriteDog";

import uploadDoggie from "@utils/uploadDogPic";
import renderUpploadedDog from "@utils/renderUploadedDog";
import getUploadedDogs from "@utils/getUploadedDogs";

import pureBredDogsData from "@utils/pureBredDogsData";

const pureBredDogsButton = null || document.querySelector('.functions-aside .search-section .search-breds-form .search-btn');
const reloadRandomDogsButton = null || document.querySelector('.random-dogs .random-dogs--header .header--controll-buttons .reload-dog');

const uploadDogForm = document.querySelector(".uploading-form");
const uploadDogButton = document.querySelector(".send-doggie");
const randomDogsList = document.querySelector('section.random-dogs > ul.dogs-list');
const favouriteDogsList = document.querySelector('section.favourite-dogs > ul.dogs-list');



(async function App() { 
    window.addEventListener("load", () => {
        getGeneralRandomDogs();
        getFavouritesDogs();
        pureBredDogsData();
        //getUploadedDogs();
    });

    reloadRandomDogsButton.addEventListener("click", getGeneralRandomDogs);
    pureBredDogsButton.addEventListener("click", getPureBredDogs);

    uploadDogButton.addEventListener("click", (e) => {
        e.preventDefault();
        uploadDoggie();
        document.querySelector(".uploading-form > .image-container .dog-image").src = "";
        uploadDogForm.reset();
    });

    uploadDogForm.addEventListener('change', (e) => {
        if (e.target.classList.contains("doggie-file")) {
            renderUpploadedDog({ input: e.target });
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