document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.body.innerHTML += `<p>&copy; ${currentYear} Your Website. All rights reserved.</p>`;
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = 'Scroll to Top';
    scrollToTopButton.style.display = 'none';

    document.body.appendChild(scrollToTopButton);

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    };

    scrollToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.createElement('input');
    darkModeToggle.type = 'checkbox';

    const darkModeLabel = document.createElement('label');
    darkModeLabel.textContent = 'Dark Mode';
    darkModeLabel.appendChild(darkModeToggle);

    document.body.appendChild(darkModeLabel);

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});