// ===== Test console =====
console.log("Site chargé ! Test local OK");

// ===== Smooth scroll pour les liens internes =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Animation hover simple =====
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('hover'));
  card.addEventListener('mouseleave', () => card.classList.remove('hover'));
});

