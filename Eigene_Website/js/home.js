const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.classList.remove('flipped'));
        card.classList.add('flipped');
    });
});