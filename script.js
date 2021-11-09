ScrollReveal().reveal('.nivaldoTitle1',{ delay: 200 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.nivaldoBtn',{ delay: 500 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.nivaldoSlideDown',{ delay: 1100 , duration: 2500  ,distance: '0px'});

ScrollReveal().reveal('.slide1',{ delay: 200 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.slide15',{ delay: 400 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.slide2',{ delay: 500 , duration: 2600 ,distance: '80px'});

ScrollReveal().reveal('.slideRight',{ delay: 400 , duration: 2500 ,distance: '100px',origin: 'right'});
ScrollReveal().reveal('.slideLeft',{ delay: 400 , duration: 2500 ,distance: '100px',origin: 'left'});

ScrollReveal().reveal('.curseFirst',{ delay: 300 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.curseSecond',{ delay: 600 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.curseThird',{ delay: 1000 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.curseFourth',{ delay: 1400 , duration: 2500  ,distance: '0px'});

ScrollReveal().reveal('.curseFive',{ delay: 1800 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.curseSix',{ delay: 2100 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.curseSeven',{ delay: 2400 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.curseEight',{ delay: 2800 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.curseNine',{ delay: 3200 , duration: 2500  ,distance: '0px'});
ScrollReveal().reveal('.curseTen',{ delay: 3600 , duration: 2500  ,distance: '0px'});

var elementButton = document.querySelector('.elevator');
var elevator = new Elevator({
    element: elementButton,
    mainAudio: './audio/music.mp3', 
    endAudio:  './audio/ding.mp3'
});