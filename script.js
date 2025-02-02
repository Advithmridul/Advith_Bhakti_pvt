function toggleLanguage() {
    var hindi = document.getElementById("hindi");
    var english = document.getElementById("english");
    if (hindi.style.display === "none") {
        hindi.style.display = "block";
        english.style.display = "none";
        event.target.textContent = "Convert to English";
    } else {
        hindi.style.display = "none";
        english.style.display = "block";
        event.target.textContent = "Convert to Hindi";
    }
}