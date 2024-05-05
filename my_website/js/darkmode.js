const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

let darkMode = 
    localStorage.getItem("dark-mode") === 'true' ? 
    true : 
    localStorage.getItem("dark-mode") === 'false' ? 
    false : 
    window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initialize dark mode based on the darkMode variable
if (darkMode) {
    document.body.classList.add("dark-mode");
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
} else {
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
}

function toggleDarkMode() {
    // Toggle darkMode variable
    darkMode = !darkMode;

    // Store darkMode variable in local Storage
    localStorage.setItem("dark-mode", darkMode);

    // Toggle dark-mode class on body
    document.body.classList.toggle("dark-mode");

    // Toggle light and dark icons
    if (darkMode) {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    }
}
