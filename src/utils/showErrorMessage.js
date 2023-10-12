import errorToast from "@templates/toast-error";

export default function showErrorMessage({ message }) { 
    let errorText = message;
    const messagesContainer = document.querySelector(".messages-container");
    let toast =  errorToast({ message: errorText });
    let id = Math.ceil(Math.random() * 100);
    let messageNode = document.createElement("div");
    messageNode.classList.add(`message-error-${id}`);
    messageNode.innerHTML = toast;
    messagesContainer.appendChild(messageNode);

    setTimeout(() => {
        document.querySelector(`div.message-error-${id}`).remove();
    }, 2500);
}