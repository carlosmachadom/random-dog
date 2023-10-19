import getFavouritesDogs from "@utils/getFavouritesDogs";
import getUploadedDogs from "@utils/getUploadedDogs";
import deleteFavouritesDogs from "@utils/deleteFavouriteDog";
import showSucessMessage from "@utils/showSuccessMessage";
import showErrorMessage from "@utils/showErrorMessage";

let validateIdInFavorites = (id) => {
    const favoriteDogs = document.querySelectorAll('.favourite-dogs > .dogs-list li .dog-card');
    const list = [...favoriteDogs];

    for (let dog of list) {
        if (dog.dataset.imageId === id) { 
            return {status: true, id: dog.dataset.id};
        }
    }

    return {status: false, id: null};
}

export default async function deleteUploadedDog({ dogId }) { 
    const API_URL = process.env.API_URL;
    const FAVOURITE_DOGS_ENDPOINT = `images`;
    const API_KEY = process.env.API_KEY;
    const url = `${API_URL}/${FAVOURITE_DOGS_ENDPOINT}/${dogId}`;

    const options = {
        method: 'DELETE',
        headers: {
            'x-api-key': API_KEY
        }
    }

    try {
        const response = await fetch(url, options);

        if (response.status !== 204) {
            throw new Error(`Error al eliminar perrito`);
        } else {            
            showSucessMessage({ message: `Perrito eliminado` });
            getUploadedDogs();

            let validateFavorite = validateIdInFavorites(dogId);
            console.log(validateFavorite);

            if (validateFavorite.status === true) {
                deleteFavouritesDogs({dogId: validateFavorite.id});
            }
        }                
    } catch (error) {
        if (error instanceof TypeError) {
            showErrorMessage({ message: error.message });
        } else {
            showErrorMessage({ message: error.message });
        }
    }
}