function updateMainImage(imageSource) {
    const mainImageElement = document.getElementById("mainimg");
    mainImageElement.setAttribute('src', imageSource);
}

// Add event listeners to all images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll("#productimgcont img");

    images.forEach(img => {
        img.addEventListener('click', function () {
            updateMainImage(this.src); // Change the main image to the clicked image's source
        });
    });
});
