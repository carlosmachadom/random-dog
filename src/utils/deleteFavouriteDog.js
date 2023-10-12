import getFavouritesDogs from "@utils/getFavouritesDogs";
import showSucessMessage from "@utils/showSuccessMessage";
import showErrorMessage from "@utils/showErrorMessage";

export default async function deleteFavouritesDogs({ dogId }) { 
    const API_URL = process.env.API_URL;
    const FAVOURITE_DOGS_ENDPOINT = `favourites`;
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
        const data = await response.json();

        if (response.status !== 200) {
            throw new Error(`Error ${response.status}: ${data.message}`);
        } else {            
            showSucessMessage({ message: `${data.message}: Perrito eliminado de favoritos` });
            getFavouritesDogs();
        }                
    } catch (error) {
        if (error instanceof TypeError) {
            showErrorMessage({ message: error.message });
        } else {
            showErrorMessage({ message: error.message });
        }
    }
}