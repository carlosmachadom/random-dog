import getData from "@utils/getData";
import generalDogCard from "@templates/generalDogCard";
import { updateArrowVisibilityFavouriteCarousel } from "@utils/favourite-dogs-carousel-behavior";

export default async function getFavouritesDogs() { 
    const FAVOURITE_DOGS_ENDPOINT = `favourites`;
    const FAVOURITE_DOGS_QUERY = `limit=0`;
    const dogsList = document.querySelector("section.favourite-dogs > .list-wrapper ul.dogs-list");

    dogsList.innerHTML = "";

    const dogs = await getData({ endpoint: FAVOURITE_DOGS_ENDPOINT, query: FAVOURITE_DOGS_QUERY });

    if (dogs) { 
        dogs.reverse().map((dog) => {
            const listItem = document.createElement("li");
            listItem.classList.add("current-dog", "delete");
            let image = dog.image.url;  
            let id = dog.id;
            let imageId = dog.image_id;
            let dogCard = generalDogCard({ imgUrl: image, dogId: id, imageId});
            listItem.innerHTML = dogCard;
            dogsList.append(listItem);
       });
    }

    updateArrowVisibilityFavouriteCarousel();
}