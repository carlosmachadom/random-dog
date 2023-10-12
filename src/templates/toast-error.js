export default function errorToast({ message }) { 
    const view = `
        <div class="toast-error">
            <span>${message}</span>
        </div>
    `;

    return view; 
}