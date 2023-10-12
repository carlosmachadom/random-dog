import showErrorMessage from "@utils/showErrorMessage";
import showSucessMessage from "@utils/showSuccessMessage";
import setFavouritesDogs from "@utils/setFavoureDog";

export default async function uploadDoggie() { 
    const uploadingForm = document.querySelector(".uploading-form");
    const formData = new FormData(uploadingForm);

    if (formData) {
        const API_URL = process.env.API_URL;
        const UPLOAD_DOG_ENDPOINT = `images/upload`;
        const API_KEY = process.env.API_KEY;
        const url = `${API_URL}/${UPLOAD_DOG_ENDPOINT}`;

        const options = {
            method: 'POST',
            headers: {
                'x-api-key': API_KEY
            },
            body: formData
        }

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            if (response.status !== 201) {
                throw new Error(`Error ${response.status}: ${data.message}`);
            } else {            
                showSucessMessage({ message: "Nuevo perrito agregado" });
                setFavouritesDogs({ dogId: data.id });
            }                
        } catch (error) {
            if (error instanceof TypeError) {
                showErrorMessage({ message: error.message });
            } else {
                showErrorMessage({ message: error.message });
            }
        }
    }
}