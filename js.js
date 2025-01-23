const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}


    document.getElementById('githubButton').addEventListener('click', function () {
        window.open('https://github.com/ricardo27885', '_blank');
    });
