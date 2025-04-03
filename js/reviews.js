// Get the review form and display container
const reviewForm = document.getElementById('reviewForm');
const reviewsDisplay = document.getElementById('reviewsDisplay');
const stars = document.querySelectorAll('.star-rating .star');
const ratingInput = document.getElementById('rating');

// Handle star rating click event
stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        
        // Update the rating input and highlight selected stars
        ratingInput.value = rating;
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            }
        });
    });
});

// Check if there are any saved reviews in localStorage
document.addEventListener('DOMContentLoaded', loadReviews);

reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = ratingInput.value;

    if (name && review && rating) {
        // Create a review object
        const newReview = {
            name: name,
            review: review,
            rating: rating,
        };

        // Save the review to localStorage
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Display the review
        displayReview(newReview);

        // Clear the form
        reviewForm.reset();
        // Reset stars
        stars.forEach(star => star.classList.remove('selected'));
        ratingInput.value = 0;
    }
});

// Load reviews from localStorage and display them
function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(displayReview);
}

// Function to display a review on the page
function displayReview(review) {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `
        <p class="review-author">${review.name}</p>
        <p>${review.review}</p>
        <p class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</p>
    `;
    reviewsDisplay.appendChild(reviewItem);
}
