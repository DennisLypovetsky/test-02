const ready = require('../../js/utils/documentReady.js');
const Swipe = require('swipejs');

// var element = document.getElementById('hero-slider');
ready(function () {

  window.mySwipe = new Swipe(document.getElementById('hero-slider'), {
    startSlide: 0,
    // auto: 3000,
    draggable: false,
    autoRestart: false,
    continuous: true
  });

});
