// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.getElementById('submit-btn');
    const ratingCard = document.getElementById('rating-card');
    const thankYouCard = document.getElementById('thank-you-card');
    const selectedRatingSpan = document.getElementById('selected-rating');
    let selectedRating;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedRating = button.getAttribute('data-rating');
        });
    });

    submitButton.addEventListener('click', () => {
        if (selectedRating) {
            selectedRatingSpan.textContent = selectedRating;
            ratingCard.classList.remove('active');
            thankYouCard.classList.add('active');
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});
