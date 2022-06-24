// function start() {
//   var myCounter = 8;
// }
// start();

// Calling function immediately; combined version
// (function () {
//   var myCounter = 8;
// }) ()

(function() {
  'use strict';

  // YOUR CODE HERE
  let stopButton = document.getElementById('stopButton');
  let stopLight = document.getElementById('stopLight');

  stopButton.addEventListener('click', () => {
    stopLight.classList.toggle('stop');
  });
  

  let slowButton = document.getElementById('slowButton');
  let slowLight = document.getElementById('slowLight');

  slowButton.addEventListener('click', () => {
    slowLight.classList.toggle('slow');
  });

  let goButton = document.getElementById('goButton');
  let goLight = document.getElementById('goLight');

  goButton.addEventListener('click', () => {
    goLight.classList.toggle('go');
});

})();

