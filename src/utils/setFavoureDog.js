import getFavouritesDogs from "@utils/getFavouritesDogs";

export default async function setFavouritesDogs({ dogId }) { 
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
        console.log({ response, data });

        if (response.status != 200) {

        } else {

        }

        getFavouritesDogs();        
    } catch (error) {
        throw new Error("Error en la solicitud: " + error.message);
    }
}