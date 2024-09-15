document.addEventListener("DOMContentLoaded", () => {
    // Light/Dark Mode Toggle in Sidebar
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("change", () => {
        const isDarkMode = themeToggle.checked;
        setTheme(isDarkMode ? 'dark' : 'light');
    });

    function setTheme(theme) {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    // Smooth scroll to sections
    window.scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    };

    // Filter Adventure Function
    window.filterAdventure = (type) => {
        console.log(`Filtering adventures for: ${type}`);
        // Add filtering logic here
    };

    // Filter Quick link Function
    window.filterQLink = (type) => {
        console.log(`Filtering quick links for: ${type}`);
        // Add filtering logic here
    };

    // Show more stories
    window.showMoreStories = () => {
        document.getElementById("hiddenStories").style.display = "block";
    };
});
