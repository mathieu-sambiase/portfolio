// Menu Burger
const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navigation.classList.toggle('active');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navigation.classList.remove('active');
    });
});

// Animation au défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// Effet de typing pour le sous-titre
const typing = document.querySelector('.typing');
const text = typing.textContent;
typing.textContent = '';
let i = 0;

function typeText() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, 100);
    }
}

// Démarrer l'animation de typing après un délai
setTimeout(typeText, 1000);

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    const submitButton = contactForm.querySelector('button');
    submitButton.textContent = 'Envoi en cours...';
    
    setTimeout(() => {
        alert('Message envoyé avec succès !');
        contactForm.reset();
        submitButton.textContent = 'Envoyer';
    }, 1500);
});