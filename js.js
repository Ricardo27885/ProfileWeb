const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
    document.getElementById('githubButton').addEventListener('click', function () {
        window.open('https://github.com/ricardo27885', '_blank');
    });

    document.querySelector('.submit').addEventListener('click', async function() {
        const fromEmail = document.getElementById('from-email').value;
        const toEmail = "borgealejandro031@gmail.com"; 
        const subject = document.getElementById('to-Subject').value;
        const message = document.getElementById('message').value;
    
        const emailData = {
            FromEmail: fromEmail,
            ToEmail: toEmail,
            Subject: subject,
            Message: message
        };
    
        try {
            const response = await fetch('https://email-xgmy.onrender.com/api/Email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData)
            });
    
            const result = await response.json();
            if (response.ok) {
                alert(result.message);  // Muestra mensaje de éxito
            } else {
                alert(result.message);  // Muestra mensaje de error
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    });
