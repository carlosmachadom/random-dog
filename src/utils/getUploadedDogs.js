import getData from "@utils/getData";
import uploadedDoggieCard from "@templates/uploadedDoggie";

export default async function getUploadedDogs() { 
    const UPLOADED_DOGS_ENDPOINT = `images`;
    const UPLOADED_DOGS_QUERY = `limit=9`;
    const dogsList = document.querySelector(".uploading-section>.uploaded-dogs .dogs-list");

    dogsList.innerHTML = "";

    const dogs = await getData({ endpoint: UPLOADED_DOGS_ENDPOINT, query: UPLOADED_DOGS_QUERY });

    if (dogs) { 
        dogs.map((dog) => {
            const listItem = document.createElement("li");
            listItem.classList.add("current-dog");
            let image = dog.url;  
            let id = dog.id;
            let dogCard = uploadedDoggieCard({ imgUrl: image, dogId: id});
            listItem.innerHTML = dogCard;
            dogsList.append(listItem);
       });
    }
}