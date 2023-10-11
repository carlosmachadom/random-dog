import getData from "@utils/getData";
import randomDoggieCard from "@templates/randomDoggieCard";

export default async function getRandomDogs({ limit }) {
    const RANDOM_DOGS_ENDPOINT = `images/search`;
    const RANDOM_DOGS_QUERY = `limit=${limit}&has_breeds=1`;
    const dogsList = document.querySelector("section.random-dogs > ul.dogs-list");

    [...dogsList.querySelectorAll("li.current-dog")].map(item => item.remove());
    const dogs = await getData({endpoint: RANDOM_DOGS_ENDPOINT, query: RANDOM_DOGS_QUERY});
    dogs.map((dog) => {
        const listItem = document.createElement("li");
        listItem.classList.add("current-dog");
        
        let image = dog.url;
        let breed = dog.breeds;
        let id = dog.id;
      
        let dogCard = randomDoggieCard({
            imgUrl: image,
            breed: breed[0].name,
            bredFor: breed[0].bred_for,
            temperament: breed[0].temperament,
            lifeSpan: breed[0].life_span,
            dogId: id
        });

       listItem.innerHTML = dogCard;
       dogsList.append(listItem);
   });
}