import getData from "@utils/getData";
import favouriteDoggieCard from "@templates/favouriteDoggieCard";

export default async function getFavouritesDogs() { 
    const FAVOURITE_DOGS_ENDPOINT = `favourites`;
    const FAVOURITE_DOGS_QUERY = `limit=10`;
    const dogsList = document.querySelector("section.favourite-dogs > ul.dogs-list");

    [...dogsList.querySelectorAll("li.current-dog")].map(item => item.remove());

    const dogs = await getData({ endpoint: FAVOURITE_DOGS_ENDPOINT, query: FAVOURITE_DOGS_QUERY });

    dogs.map((dog) => {
        const listItem = document.createElement("li");
        listItem.classList.add("current-dog");        
        let image = dog.image.url;      
        let dogCard = favouriteDoggieCard({ imgUrl: image });
        listItem.innerHTML = dogCard;
        dogsList.append(listItem);
   });
}