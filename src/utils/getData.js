import showErrorMessage from "@utils/showErrorMessage";

export default async function getData({ endpoint, query }) {     
    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;

    const options = {
        method: 'GET',
        headers: {
            'x-api-key': API_KEY
        }
    }

    try {
        const response = await fetch(`${API_URL}/${endpoint}?${query}`, options);
        const data = await response.json();
        
        if (response.status !== 200) {
            throw new Error(`Error ${response.status}: ${data.message}`);
        } else { 
            return data;
        }

    } catch (error) {
        if (error instanceof TypeError) {
            showErrorMessage({ message: error.message });
        } else {
            showErrorMessage({ message: error.message });
        }
    }
}