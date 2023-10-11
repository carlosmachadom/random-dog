const error = document.querySelector(".error");

export default async function getData({ endpoint, query }) {     
    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;

    try {
        const response = await fetch(`${API_URL}/${endpoint}?${query}&api_key=${API_KEY}`);
        const data = await response.json();
        if (response.status !== 200) {
            error.innerHTML = "There is an error: " + response.status + " " + data.message;            
        } else {             
            return data;
        }
    } catch (error) {
        throw new Error("Doggie not found..");
    }
}