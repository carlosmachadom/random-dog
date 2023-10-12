import successToast from "@templates/toast-success";

export default function showSucessMessage({ message }) { 
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