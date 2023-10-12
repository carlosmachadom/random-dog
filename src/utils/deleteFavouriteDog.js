import getFavouritesDogs from "@utils/getFavouritesDogs";
import successToast from "@templates/toast-success";

function showSucessMessage({ message }) { 
    let successText = message;
    const messagesContainer = document.querySelector(".messages-container");
    let toast =  successToast({ message: successText });
    let id = Math.ceil(Math.random() * 100);
    let messageNode = document.createElement("div");
    messageNode.classList.add(`message-success-${id}`);
    messageNode.innerHTML = toast;
    messagesContainer.appendChild(messageNode);

    setTimeout(() => {
        document.querySelector(`div.message-success-${id}`).remove();
    }, 2500);
}

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
        //console.log({ response, data });

        if (response.status === 200) {
            showSucessMessage({ message: data.message });
        } else {

        }

        getFavouritesDogs();        
    } catch (error) {
        throw new Error("Error en la solicitud: " + error.message);
    }
}