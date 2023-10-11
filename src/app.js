import getRandomDogs from "@utils/getRandomDogs";
import getFavouritesDogs from "@utils/getFavouritesDogs";
import insertNewFavoriteDog from "@utils/getFavouriteDog";
import setFavouritesDogs from "@utils/setFavoureDog";
import getUseInput from "@utils/getUserInput";

const form = document.querySelector(".form");
const buttonDog = document.querySelector("button.dog");
const randomDogsList = document.querySelector('section.random-dogs > ul.dogs-list');

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
        form.reset();
    });

    randomDogsList.addEventListener('click', (e) => {
        if (e.target.classList.contains("favourite-btn")) {
            let id = e.target.parentNode.parentNode.getAttribute("data-id");
            setFavouritesDogs({ dogId: id });
            insertNewFavoriteDog({ dogId: id });
        }
    })
})()