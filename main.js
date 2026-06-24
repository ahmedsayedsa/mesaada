document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.shot-card');
    
    // Simple fade-in animation for cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});
