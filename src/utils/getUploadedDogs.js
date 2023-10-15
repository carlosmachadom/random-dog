import getData from "@utils/getData";
import uploadedDoggieCard from "@templates/uploadedDoggie";

export default async function getUploadedDogs() { 
    const UPLOADED_DOGS_ENDPOINT = `images`;
    const UPLOADED_DOGS_QUERY = `limit=10`;
    const dogsList = document.querySelector(".upload-new-dog section.uploaded-dogs > ul.dogs-list");

    dogsList.innerHTML = "";

    const dogs = await getData({ endpoint: UPLOADED_DOGS_ENDPOINT, query: UPLOADED_DOGS_QUERY });
    console.log(dogs);

    if (dogs) { 
        dogs.reverse().map((dog) => {
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