const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const subjectField = document.getElementById('subject');
const messageField = document.getElementById('message');

if (contactForm && successMessage && nameField && emailField && subjectField && messageField) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = nameField.value;
        const email = emailField.value;
        const subject = subjectField.value;
        const message = messageField.value;

        // Simple form validation
        if (name && email && subject && message) {
            // Here you can integrate your email service for sending the message
            // For now, we will display the success message
            successMessage.style.display = 'block';
            contactForm.reset(); // Reset the form fields
        } else {
            alert("Please fill in all fields!");
        }
    });
} else {
    console.error("One or more required elements are missing in the HTML.");
}
