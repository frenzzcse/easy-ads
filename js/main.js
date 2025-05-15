document.addEventListener('DOMContentLoaded', () => {

    // Access control for AFK Logs tab (keeping this logic)
    const allowedUsers = ["sabbir12@", "lucix", "admin"]; // Add allowed usernames here
    // Assuming 'username' variable is defined elsewhere or retrieved
    const username = "guest"; // Placeholder: Replace with actual username retrieval logic

    // Function to show a specific content section and hide others
    window.showSection = function(sectionId) {
        // If trying to access AFK logs but not allowed (keeping this check)
        if (sectionId === 'afk-logs' && !allowedUsers.includes(username)) {
            showErrorPopup("You are not permitted to access this page.");
            // Optionally redirect to a default section
            window.showSection('car-trade'); // Redirect to Car Ads if not allowed
            return;
        }

        // Hide all content sections
        document.querySelectorAll('.tab-content').forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected content section
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // Update active class in the sidebar menu
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.sidebar-nav a[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // On smaller screens, you might want to scroll the content into view
        if (window.innerWidth <= 768 && activeSection) {
             activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Add event listeners to the sidebar menu links
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                window.showSection(sectionId);
            }
        });
    });


    // Function to show the error popup (keeping this)
    window.showErrorPopup = function(message) {
        const errorPopup = document.getElementById("errorPopup");
        if (errorPopup) { // Check if element exists
            const popupContent = errorPopup.querySelector('.popup-content p');
            const errorOkButton = errorPopup.querySelector('#errorOkButton');

            if (popupContent) popupContent.textContent = message;
            errorPopup.classList.add('show'); // Use class for visibility

            // Remove previous event listeners before adding a new one
            const newOkButton = errorOkButton.cloneNode(true);
            errorOkButton.parentNode.replaceChild(newOkButton, errorOkButton);
            const updatedOkButton = document.getElementById("errorOkButton");


            if (updatedOkButton) {
                 updatedOkButton.addEventListener('click', () => {
                     errorPopup.classList.remove('show');
                 });
            }


            // Close popup when clicking outside (optional, using class for visibility)
            errorPopup.addEventListener('click', (event) => {
                if (event.target === errorPopup) {
                    errorPopup.classList.remove('show');
                }
            });
        } else {
             // Fallback if error popup elements are not found
            alert('Error: ' + message);
        }
    };

    // Show notification for copy success (keeping this)
    window.showNotification = function(message = 'Copied to clipboard!') { // Added default message
        const notification = document.getElementById('notification');
        if (notification) { // Check if element exists
            notification.textContent = message; // Set message
            notification.classList.add('show'); // Use class for visibility
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }
    };

    // Run permission check on page load (keeping this)
    // This will prevent accessing the AFK logs section directly via URL/hash if implemented later
    // and hide the AFK logs card if you add one and the user is not allowed.
    // For now, it just checks if the user is allowed (based on the placeholder username).
    if (!allowedUsers.includes(username)) {
        // If you had an AFK logs card, you would hide it here
        // const afkLogsCard = document.querySelector('.menu-card[data-section="afk-logs"]');
        // if (afkLogsCard) {
        //     afkLogsCard.style.display = 'none';
        // }
    }


    // Handle clicks outside suggestion boxes (keeping this, adjusting selectors if needed)
    document.addEventListener('click', (e) => {
        // Select all suggestion boxes
        document.querySelectorAll('.suggestion-box, .suggestions').forEach(suggestionBox => {
            // Check if the click target is inside the current suggestion box or its associated input
            let isClickInside = suggestionBox.contains(e.target);
            let associatedInput = null;

            // Find the associated input for suggestion-box (used in carAds, houseAds, businessAds)
            if (suggestionBox.id.endsWith('-suggestions')) {
                const inputId = suggestionBox.id.replace('-suggestions', '');
                associatedInput = document.getElementById(inputId);
            }
            // Find the associated input for suggestions (used in items.js)
            if (suggestionBox.classList.contains('suggestions')) {
                 // The input is the previous sibling element within the same input-group
                 associatedInput = suggestionBox.previousElementSibling;
            }


            if (!isClickInside && (!associatedInput || !associatedInput.contains(e.target))) {
                // Hide the suggestion box if the click is outside and not on the associated input
                if (suggestionBox.classList.contains('suggestion-box')) {
                     suggestionBox.style.display = 'none';
                } else if (suggestionBox.classList.contains('suggestions')) {
                     suggestionBox.classList.add('d-none'); // Use d-none for the items.js suggestions
                }
            }
        });
    });


    // Track ad stats locally (keeping this)
    window.updateAdCount = function(type) {
        let counts = localStorage.getItem('adCounts');
        counts = counts ? JSON.parse(counts) : { car: 0, house: 0, clothing: 0, items: 0, business: 0 }; // Added other types
        if (counts[type] !== undefined) { // Check if the type is valid
             counts[type] += 1;
             localStorage.setItem('adCounts', JSON.stringify(counts));

             // Update stats in local storage
             const stats = {
                 username: username,
                 carAds: counts.car,
                 houseAds: counts.house,
                 clothingAds: counts.clothing,
                 itemsAds: counts.items,
                 businessAds: counts.business,
                 totalAds: counts.car + counts.house + counts.clothing + counts.items + counts.business,
                 lastUpdated: new Date().toLocaleString()
             };

             localStorage.setItem('userStats', JSON.stringify(stats));
             return counts[type];
        }
        return -1; // Return -1 if type is invalid
    };

    // Initial state: Hide all content sections and show the default section (e.g., Car Ads)
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active'); // Hide all content sections
    });
    // Show the default section on load
    window.showSection('car-trade'); // Show Car Ads by default
});
