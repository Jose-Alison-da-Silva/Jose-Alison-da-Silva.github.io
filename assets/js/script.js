const mode = document.querySelector('#mode-icon');

mode.addEventListener('click', () => {
    const mainLogin = document.querySelector('.main-login');

    if (mode.classList.contains('fa-sun')) {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        mode.classList.add('light');
        mainLogin.classList.add('light');
        return;
    }

    mode.classList.remove('fa-moon');
    mode.classList.remove('light');
    mode.classList.add('fa-sun');
    mainLogin.classList.remove('light');
});