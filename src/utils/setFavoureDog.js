import getFavouritesDogs from "@utils/getFavouritesDogs";
import showSucessMessage from "@utils/showSuccessMessage";
import showErrorMessage from "@utils/showErrorMessage";
import validateFavoriteDog from "@utils/validateFavoriteExistence";

export default async function setFavouritesDogs({ dogId }) { 
    console.log(validateFavoriteDog({ id: dogId }));
    
    if (validateFavoriteDog({ id: dogId })) {
        showErrorMessage({ message: "Tu perrito ya existe en la lista de favoritos" });
    } else {
        const API_URL = process.env.API_URL;
        const FAVOURITE_DOGS_ENDPOINT = `favourites`;
        const API_KEY = process.env.API_KEY;
        const url = `${API_URL}/${FAVOURITE_DOGS_ENDPOINT}`;
    
    
        const bodyData = JSON.stringify({
            image_id: `${dogId}`
        });
    
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': API_KEY
            },
            body: bodyData,
        }
    
        try {
            const response = await fetch(url, options);
            const data = await response.json();
    
            if (response.status !== 200) {
                throw new Error(`Error ${response.status}: ${data.message}`);
            } else {            
                showSucessMessage({ message: `${data.message}: Perrito agregado a favoritos` });
                getFavouritesDogs();
            }                
        } catch (error) {
            if (error instanceof TypeError) {
                showErrorMessage({ message: error.message });
            } else {
                showErrorMessage({ message: error.message});
            }
        }
    }

}