export default function renderUpploadedDog({input}) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.querySelector(".uploading-form > .image-container .dog-image").src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}