

function showError({ status, message }) { 
    const errorContainer = document.querySelector(".toast-messages");
    const error = errorContainer.querySelector(".error");
    error.innerHTML = `
        Error ${status} - ${message}:
    `;

    if (errorContainer.classList.contains('hidden')) { 
        errorContainer.classList.remove('hidden')
    }

    setInterval(() => { 
        if (!errorContainer.classList.contains('hidden')) { 
            errorContainer.classList.add('hidden')
        }
    }, 2000)
}

export default async function getData({ endpoint, query }) {     
    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;

    try {
        const response = await fetch(`${API_URL}/${endpoint}?${query}&api_key=${API_KEY}`);
        const data = await response.json();
        return data;
        if (response.status === 200) {
            
        }
    } catch (error) {
        throw new Error("Doggie not found..");
    }
}