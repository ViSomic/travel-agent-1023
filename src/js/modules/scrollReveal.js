import ScrollReveal from 'scrollreveal';

export default function ScrollRevealFunc() {
    // Базовые настройки
    ScrollReveal({
        distance: '60px',
        duration: 2800
    });

    ScrollReveal().reveal('.header', {
        origin: 'top'
    })

    ScrollReveal().reveal('.discover__desc', {
        origin: 'left'
    })

    ScrollReveal().reveal('.partners__row, .popular__slider', {
        origin: 'bottom'
    })

    ScrollReveal().reveal('.discover__picture-hint', {
        origin: 'left',
        delay: 300
    })
}
