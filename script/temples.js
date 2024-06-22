document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
            menuToggle.textContent = '☰';
        } else {
            menu.style.display = 'flex';
            menuToggle.textContent = 'X';
        }
    });

    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');
    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    
    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModified;
});
