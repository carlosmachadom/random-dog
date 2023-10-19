const selectedImageContainer = document.querySelector(".uploading-form > .image-container");
const selectedImage = document.querySelector(".uploading-form > .image-container .dog-image");
const selectedImageText = document.querySelector(".uploading-section> .uploading-form> .fake-button .select-text > span");
const errorSpan = document.querySelector('.uploading-form .error-message');

export default function renderUpploadedDog({ input }) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      if (!errorSpan.classList.contains('hidden')) {
          errorSpan.classList.add('hidden');
          errorSpan.textContent = "";
      }

      if (selectedImageContainer.classList.contains('hidden')) { 
        selectedImageContainer.classList.remove('hidden');
      }

      selectedImage.src = e.target.result;
      selectedImageText.textContent = input.files[0].name;
    };

    reader.readAsDataURL(input.files[0]);
  }
}