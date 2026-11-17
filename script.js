// Seleccionar os elementos do menu
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

// Abrir e fechar o menu
menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', String(!isOpen));

    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Abrir menu' : 'Fechar menu'
    );

    navigation.classList.toggle('open', !isOpen);
});

// Fechar o menu ao clicar num link
navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.remove('open');

        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
    });
});

// Actualizar automaticamente o ano do rodapé
document.querySelector('#year').textContent =
    new Date().getFullYear();
