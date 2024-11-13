document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded");

    emailjs.init("vi-EhYH_gfE49QTox"); // Replace with your actual EmailJS public key

    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submit event triggered");

        // Set current date and time in hidden fields
        const now = new Date();
        form.elements['submission_date'].value = now.toLocaleDateString();
        form.elements['submission_time'].value = now.toLocaleTimeString();

        // Gather form data
        const templateParams = {
            name: form.elements['name'].value,
            mc: form.elements['mc'].value,
            email: form.elements['email'].value,
            number: form.elements['number'].value,
            truck_type: form.elements['truck_type'].value,
            authority_age: form.elements['authority_age'].value,
            submission_date: form.elements['submission_date'].value,
            submission_time: form.elements['submission_time'].value,
        };

        console.log("Data being sent:", templateParams);

        // Send email via EmailJS
        emailjs.send('service_64tvr9f', 'template_wm1r6kx', templateParams)
            .then(function(response) {
                console.log("Email sent successfully:", response.status, response.text);
                alert("Form submitted successfully!");
            })
            .catch(function(error) {
                console.error("Error sending email:", error);
                alert("Error sending email. Please try again.");
            });
    });
});
