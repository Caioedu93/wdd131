document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();

    const lastModified = document.lastModified;


    const copyrightYearElement = document.getElementById("copyright-year");
    if (copyrightYearElement) {
        copyrightYearElement.textContent = `© ${currentYear} ⚽  Caio Eduardo Jesus de Paula  Brasil  ⚽`;
    }



    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    }
});