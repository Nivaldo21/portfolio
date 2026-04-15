ScrollReveal().reveal('.nivaldoTitle1', { delay: 200, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.nivaldoBtn', { delay: 500, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.nivaldoSlideDown', { delay: 1100, duration: 2500, distance: '0px' });

ScrollReveal().reveal('.slide1', { delay: 200, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.slide15', { delay: 400, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.slide2', { delay: 500, duration: 2600, distance: '80px' });

ScrollReveal().reveal('.slideRight', { delay: 400, duration: 2500, distance: '100px', origin: 'right' });
ScrollReveal().reveal('.slideLeft', { delay: 400, duration: 2500, distance: '100px', origin: 'left' });

ScrollReveal().reveal('.curseFirst', { delay: 300, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseSecond', { delay: 600, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseThird', { delay: 1000, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseFourth', { delay: 1400, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseFive', { delay: 1800, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseSix', { delay: 2100, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseSeven', { delay: 2400, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseEight', { delay: 2800, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseNine', { delay: 3200, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseTen', { delay: 3600, duration: 2500, distance: '0px' });
ScrollReveal().reveal('.curseEleven', { delay: 4000, duration: 2500, distance: '0px' });

var elementButton = document.querySelector('.elevator');
if (elementButton) {
    new Elevator({
        element: elementButton,
        mainAudio: './audio/music.mp3',
        endAudio: './audio/ding.mp3'
    });
}

var chatItems = document.querySelectorAll('.wa-chat-item');
var chatThreads = document.querySelectorAll('.wa-thread');

if (chatItems.length && chatThreads.length) {
    var activateChat = function(chatId) {
        chatItems.forEach(function(item) {
            var isActive = item.getAttribute('data-chat') === chatId;
            item.classList.toggle('is-active', isActive);
            item.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        chatThreads.forEach(function(thread) {
            var isActive = thread.getAttribute('data-chat-thread') === chatId;
            thread.classList.toggle('is-active', isActive);
        });
    };

    chatItems.forEach(function(item) {
        item.addEventListener('click', function() {
            activateChat(item.getAttribute('data-chat'));
        });
    });

    var firstActive = document.querySelector('.wa-chat-item.is-active');
    if (firstActive) {
        activateChat(firstActive.getAttribute('data-chat'));
    }
}

var currentLanguage = 'es';
var translations = {
    es: {
        title: 'Miguel Nivaldo Alejandro Quinones Garcia',
        role: 'Ingeniero de Software',
        downloadCV: 'Descargar CV',
        scrollDown: 'Desliza hacia abajo',
        aboutTitle: 'Sobre <span class="text-blue-700">Mi</span>',
        softSkillsTitle: 'Habilidades blandas',
        dominantTechTitle: 'Tecnologias dominantes',
        educationTitle: 'Formacion academica',
        educationSubtitle: 'Preparacion profesional y cedulas',
        experienceTitle: 'Experiencia profesional',
        experienceSubtitle: 'Vista tipo WhatsApp Web: abre cada chat para ver la historia completa',
        chatsLabel: 'Chats de experiencia',
        stackTitle: 'Mi stack',
        stackSubtitle: 'Tecnologias con las que construyo soluciones de negocio'
    },
    en: {
        title: 'Miguel Nivaldo Alejandro Quinones Garcia',
        role: 'Software Engineer',
        downloadCV: 'Download CV',
        scrollDown: 'Scroll down',
        aboutTitle: 'About <span class="text-blue-700">Me</span>',
        softSkillsTitle: 'Soft skills',
        dominantTechTitle: 'Core technologies',
        educationTitle: 'Academic background',
        educationSubtitle: 'Professional preparation and licenses',
        experienceTitle: 'Professional experience',
        experienceSubtitle: 'WhatsApp Web view: open each chat to see the full story',
        chatsLabel: 'Experience chats',
        stackTitle: 'My stack',
        stackSubtitle: 'Technologies I use to build business solutions'
    }
};

function updateLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = currentLanguage;

    var titleEl = document.querySelector('h1.nivaldoTitle1');
    if (titleEl) titleEl.textContent = translations[currentLanguage].title;

    var roleEl = document.querySelector('h5.nivaldoTitle1');
    if (roleEl) roleEl.textContent = translations[currentLanguage].role;

    var cvBtn = document.querySelector('[download]');
    if (cvBtn) cvBtn.textContent = translations[currentLanguage].downloadCV;

    var scrollText = document.querySelector('.nivaldoSlideDown p');
    if (scrollText) scrollText.textContent = translations[currentLanguage].scrollDown;

    var i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        var value = translations[currentLanguage][key];
        if (!value) return;
        if (key === 'aboutTitle') {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    var langES = document.querySelector('#langES');
    var langEN = document.querySelector('#langEN');
    if (langES) langES.style.opacity = currentLanguage === 'es' ? '1' : '0.5';
    if (langEN) langEN.style.opacity = currentLanguage === 'en' ? '1' : '0.5';

    localStorage.setItem('preferredLanguage', currentLanguage);
}

var langESBtn = document.querySelector('#langES');
var langENBtn = document.querySelector('#langEN');

if (langESBtn) {
    langESBtn.addEventListener('click', function() {
        updateLanguage('es');
    });
}

if (langENBtn) {
    langENBtn.addEventListener('click', function() {
        updateLanguage('en');
    });
}

var savedLanguage = localStorage.getItem('preferredLanguage');
updateLanguage(savedLanguage === 'en' ? 'en' : 'es');