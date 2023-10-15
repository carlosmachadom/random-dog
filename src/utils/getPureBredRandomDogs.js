import getGeneralRandomDogs from "@utils/getGeneralRandomDogs";

export default function getPureBredDogs() { 
    const dogValue = document.querySelector(".functions-aside .search-section .search-breds-form .bred-label #select-dog").value;
    const dogValueNumber = Number(dogValue);
    const selectDogsForm = document.querySelector(".search-section .search-breds-form");

    if (!isNaN(dogValueNumber)) {
        getGeneralRandomDogs({ breedId: dogValueNumber });
    } else {
        getGeneralRandomDogs({ breed: true });
    }

    selectDogsForm.reset();
}