// Selección de elementos
const cookiePopup = document.getElementById('cookiePopup');
const acceptButton = document.getElementById('acceptCookies');
const closeButton = document.getElementById('closePopup');

// Función para ocultar el popup y almacenar consentimiento
function acceptCookies() {
    cookiePopup.style.display = 'none';
    localStorage.setItem('cookieConsent', 'true');
}

// Función para cerrar el popup sin almacenar consentimiento
function closePopup() {
    cookiePopup.style.display = 'none';
}

// Mostrar el popup si no hay consentimiento previo
if (!localStorage.getItem('cookieConsent')) {
    cookiePopup.style.display = 'flex';
}

// Event listeners
acceptButton.addEventListener('click', acceptCookies);
closeButton.addEventListener('click', closePopup);
