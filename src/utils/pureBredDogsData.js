import getData from "@utils/getData";

export default async function pureBredDogsData({ limit = "" } = {}) {
    const RANDOM_DOGS_ENDPOINT = `breeds`;
    let RANDOM_DOGS_QUERY = `limit=${limit}`;
    
    const selectDogsList = document.querySelector(".search-section .search-breds-form #select-dog");

    const dogsData = await getData({ endpoint: RANDOM_DOGS_ENDPOINT, query: RANDOM_DOGS_QUERY });
    
    if (dogsData) {
        dogsData.map((dog) => {
            const optionItem = document.createElement("option");
            optionItem.classList.add("current-dog");
            optionItem.value = dog.id;    
            optionItem.textContent = dog.name;
            selectDogsList.append(optionItem);
       });
    }
}