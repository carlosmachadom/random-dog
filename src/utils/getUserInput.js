export default function getUseInput() { 
    const value = document.querySelector("input#dogs-number").value;
    if (value != "") { 
        return value;
    }
}