import showErrorMessage from "@utils/showErrorMessage";
import showSucessMessage from "@utils/showSuccessMessage";
import getUploadedDogs from "@utils/getUploadedDogs";

const inputFile = document.querySelector(".uploading-form input[type=file]");
const selectedImageContainer = document.querySelector(".uploading-form > .image-container");
const selectedImage = document.querySelector(".uploading-form > .image-container .dog-image");
const selectedImageText = document.querySelector(".uploading-section> .uploading-form> .fake-button .select-text > span");

export default async function uploadDoggie() { 
    const uploadingForm = document.querySelector(".uploading-form");
    const formData = new FormData(uploadingForm);
    
    
    if (formData && inputFile.files[0] && inputFile.files[0].name) {
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
                if (!selectedImageContainer.classList.contains('hidden')) {
                    selectedImageContainer.classList.add('hidden');
                    selectedImage.src = "";
                    selectedImageText.textContent = "Select file...";
                    uploadingForm.reset();
                }

                showSucessMessage({ message: "Nuevo perrito agregado" });
                getUploadedDogs();
            }
        } catch (error) {
            if (error instanceof TypeError) {
                showErrorMessage({ message: error.message });
            } else {
                showErrorMessage({ message: error.message });
            }
        }
    } else { 
        document.querySelector(".uploading-section > .uploading-form> .fake-button").click();
    }
}