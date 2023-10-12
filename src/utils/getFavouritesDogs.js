import getData from "@utils/getData";
import favouriteDoggieCard from "@templates/favouriteDoggieCard";

export default async function getFavouritesDogs() { 
    const FAVOURITE_DOGS_ENDPOINT = `favourites`;
    const FAVOURITE_DOGS_QUERY = `limit=0`;
    const dogsList = document.querySelector("section.favourite-dogs > ul.dogs-list");

    dogsList.innerHTML = "";

    const dogs = await getData({ endpoint: FAVOURITE_DOGS_ENDPOINT, query: FAVOURITE_DOGS_QUERY });

    if (dogs) { 
        dogs.reverse().map((dog) => {
            const listItem = document.createElement("li");
            listItem.classList.add("current-dog");
            let image = dog.image.url;  
            let id = dog.id;
            let dogCard = favouriteDoggieCard({ imgUrl: image, dogId: id});
            listItem.innerHTML = dogCard;
            dogsList.append(listItem);
       });
    }
}