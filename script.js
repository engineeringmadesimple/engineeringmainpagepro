document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all select elements
    const selects = document.querySelectorAll('.dropdown-select');
    
    selects.forEach(select => {
        select.addEventListener('change', function(e) {
            const selectedTopic = e.target.value;
            const selectId = e.target.id;
            
            // Handle the selection based on which dropdown was used
            switch(selectId) {
                case 'videoLectures':
                    console.log('Video Lecture selected:', selectedTopic);
                    // Add your video lecture logic here
                    break;
                case 'speedTest':
                    console.log('Speed Test selected:', selectedTopic);
                    // Add your speed test logic here
                    break;
                case 'resources':
                    console.log('Resource selected:', selectedTopic);
                    // Add your resources logic here
                    break;
            }
        });
    });

    // Hamburger menu toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Function to show "COMING SOON" popup
    function showComingSoon(event) {
        event.preventDefault(); // Prevent navigation
        let popup = document.createElement("div");
        popup.className = "popup-message";
        popup.innerText = "COMING SOON";
        document.body.appendChild(popup);

        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "rgba(0, 0, 0, 0.8)";
        popup.style.color = "white";
        popup.style.padding = "15px 20px";
        popup.style.borderRadius = "5px";
        popup.style.fontSize = "1rem";
        popup.style.zIndex = "1000";
        popup.style.display = "block";

        // Remove the popup after 2 seconds
        setTimeout(() => {
            popup.style.display = "none";
            document.body.removeChild(popup);
        }, 2000);
    }

    // Add event listener to "DOWNLOADABLE RESOURCES" tab
    const disabledLink = document.querySelector('.disabled-link');
    if (disabledLink) {
        disabledLink.addEventListener('click', showComingSoon);
    }
});
