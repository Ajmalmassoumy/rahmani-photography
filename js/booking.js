document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const specialRequest = document.getElementById('specialRequest').value;

    const bookingDetails = `
        <strong>Service:</strong> ${service} <br>
        <strong>Date:</strong> ${date} <br>
        <strong>Time:</strong> ${time} <br>
        <strong>Special Requests:</strong> ${specialRequest ? specialRequest : 'None'} <br>
    `;

    document.getElementById('bookingDetails').innerHTML = bookingDetails;

    // Hide the form and show the confirmation message
    document.querySelector('.booking-form').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
});
