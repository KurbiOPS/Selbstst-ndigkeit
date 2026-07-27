const flipButtons = document.querySelectorAll('.flip-btn');

flipButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.card').classList.toggle('flipped');
    });
});