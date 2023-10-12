import getRandomDogs from "@utils/getRandomDogs";
import getFavouritesDogs from "@utils/getFavouritesDogs";
import setFavouritesDogs from "@utils/setFavoureDog";
import deleteFavouritesDogs from "@utils/deleteFavouriteDog";
import getUseInput from "@utils/getUserInput";
import uploadDoggie from "@utils/uploadDogPic";
import renderUpploadedDog from "@utils/renderUploadedDog";

const getDogsform = document.querySelector(".form");
const uploadDogForm = document.querySelector(".uploading-form");
const buttonDog = document.querySelector("button.dog");
const uploadDogButton = document.querySelector(".send-doggie");
const randomDogsList = document.querySelector('section.random-dogs > ul.dogs-list');
const favouriteDogsList = document.querySelector('section.favourite-dogs > ul.dogs-list');

(async function App() { 
    window.addEventListener("load", (event) => { 
        event.preventDefault();
        const value = getUseInput();
        getRandomDogs({ limit: value });
        getFavouritesDogs();
    });

    buttonDog.addEventListener("click", (event) => { 
        event.preventDefault();
        const value = getUseInput();
        getRandomDogs({ limit: value });
        getDogsform.reset();
    });

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
            let id = e.target.parentNode.parentNode.getAttribute("data-id");
            setFavouritesDogs({ dogId: id });
        }
    });   
    
    favouriteDogsList.addEventListener('click', (e) => {
        if (e.target.classList.contains("delete-btn")) {
            let id = e.target.parentNode.parentNode.getAttribute("data-id");
            deleteFavouritesDogs({ dogId: id });
        }
    });
})()