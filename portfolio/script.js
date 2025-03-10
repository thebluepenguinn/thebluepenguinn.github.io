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
});
