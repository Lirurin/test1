const objectFitImages = require('object-fit-images');

document.addEventListener('DOMContentLoaded', () => {
    const fitImage = document.querySelector('.image-fit')
    objectFitImages(fitImage);
})