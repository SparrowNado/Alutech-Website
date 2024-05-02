// Wait for the window to load
window.onload = function() {
    // Fade out the splash screen after 3 seconds
    setTimeout(function() {
        var splash = document.querySelector('.splash');
        var content = document.querySelector('.content');
        var titleContainer = document.querySelector('.titlecontainer');

        splash.classList.add('fade-out');
        content.classList.add('fade-in');

        // Fade out the titleContainer upward after 3 seconds
        setTimeout(function() {
            titleContainer.classList.add('fade-out');
        }, 3000); // Adjust the duration as needed

    }, 3000); // Adjust the duration as needed
};
