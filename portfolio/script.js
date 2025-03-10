document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch("header.html")
        .then(response => {
            console.log("Header fetch response:", response);
            if (!response.ok) {
                throw new Error(`Header fetch failed: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Header loaded successfully.");
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));

    // Load footer
    fetch("footer.html")
        .then(response => {
            console.log("Footer fetch response:", response);
            if (!response.ok) {
                throw new Error(`Footer fetch failed: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Footer loaded successfully.");
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
// Handle form submission
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(contactForm);

        // Use fetch to send data to the server (e.g., action_page.php or Formspree)
        fetch('action_page.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            console.log("Form submission successful:", result);
            alert("Your message has been sent successfully!"); // Feedback for the user
        })
        .catch(error => {
            console.error("Form submission failed:", error);
            alert("There was an error submitting your form. Please try again.");
        });
    });
});
