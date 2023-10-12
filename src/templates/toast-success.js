export default function successToast({ message }) { 
    const view = `
        <div class="toast-success">
            <span>${message}</span>
        </div>
    `;

    return view; 
}