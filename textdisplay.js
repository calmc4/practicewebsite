document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('scrollingText');
    const filePath = "notes.txt";

    fetch(filePath)
        .then(response => response.text())
        .then(content => {
            textContainer.innerHTML = content.replace(/\n/g, '<br>'); // Preserve line breaks
        })
        .catch(error => {
            textContainer.innerHTML = 'Error loading the file.';
        });
});