import getData from "@utils/getData";
import generalDogCard from "@templates/generalDogCard";
import { updateArrowVisibilityRandomCarousel } from "@utils/random-dogs-carousel-behavior";

export default async function getGeneralRandomDogs({ limit = 3, breed = null, breedId = null } = {}) {
    const RANDOM_DOGS_ENDPOINT = `images/search`;
    
    let RANDOM_DOGS_QUERY = `limit=${limit}`;
    
    if (breed !== null) {
        RANDOM_DOGS_QUERY = `limit=${limit}&has_breeds=1`;
    }
    
    if (breedId !== null) {
        RANDOM_DOGS_QUERY = `limit=${limit}&breed_ids=${breedId}`;
    }
    
    const dogsList = document.querySelector("section.random-dogs > .list-wrapper .dogs-list");
    dogsList.innerHTML = "";

    const dogs = await getData({ endpoint: RANDOM_DOGS_ENDPOINT, query: RANDOM_DOGS_QUERY });

    if (dogs) {
        dogs.map((dog) => {
            const listItem = document.createElement("li");
            listItem.classList.add("current-dog");
                      
            let dogCard = generalDogCard({
                imgUrl: dog.url,
                breeds: dog.breeds,
                dogId: dog.id
            });
    
           listItem.innerHTML = dogCard;
            dogsList.append(listItem);
       });
    }

    updateArrowVisibilityRandomCarousel();
}