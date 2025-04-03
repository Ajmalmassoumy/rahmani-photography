// Get all images inside the gallery
const galleryImages = document.querySelectorAll('.lightbox');

// Get the lightbox modal and its content
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const closeModal = document.getElementById('closeModal');

// Open lightbox when an image is clicked
galleryImages.forEach(image => {
    image.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const imageUrl = this.href;
        lightboxImage.src = imageUrl;
        lightboxModal.style.display = 'flex';
    });
});

// Close the lightbox when the close button is clicked
closeModal.addEventListener('click', function() {
    lightboxModal.style.display = 'none';
});

// Close the lightbox if the user clicks outside of the image
lightboxModal.addEventListener('click', function(e) {
    if (e.target === lightboxModal) {
        lightboxModal.style.display = 'none';
    }
});

