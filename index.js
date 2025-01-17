// PART 1
// (function() {
//   'use strict';

//   // YOUR CODE HERE
//   let stopButton = document.getElementById('stopButton');
//   let stopLight = document.getElementById('stopLight');

//   stopButton.addEventListener('click', () => {
//     stopLight.classList.toggle('stop');
//   });
  

//   let slowButton = document.getElementById('slowButton');
//   let slowLight = document.getElementById('slowLight');

//   slowButton.addEventListener('click', () => {
//     slowLight.classList.toggle('slow');
//   });

//   let goButton = document.getElementById('goButton');
//   let goLight = document.getElementById('goLight');

//   goButton.addEventListener('click', () => {
//     goLight.classList.toggle('go');
// });

// })();


// //PART 2
// (function() {
//   'use strict';

//   // YOUR CODE HERE
// let stopButton = document.getElementById('stopButton');
// let stopLight = document.getElementById('stopLight');
// let slowButton = document.getElementById('slowButton');
// let slowLight = document.getElementById('slowLight');
// let goButton = document.getElementById('goButton');
// let goLight = document.getElementById('goLight');

// 1st way
// stopButton.addEventListener('mouseenter', () => {
//     console.log(`Enter ${stopButton.innerText} button`)   
// });
// stopButton.addEventListener('mouseleave', () => {
//   console.log(`Left ${stopButton.innerText} button`)   
// });
// slowButton.addEventListener('mouseenter', () => {
//   console.log(`Enter ${slowButton.innerText} button`)   
// });
// slowButton.addEventListener('mouseleave', () => {
// console.log(`Left ${slowButton.innerText} button`)   
// });
// goButton.addEventListener('mouseenter', () => {
//   console.log(`Enter ${goButton.innerText} button`)   
// });
// goButton.addEventListener('mouseleave', () => {
// console.log(`Left ${goButton.innerText} button`)   
// });

// 2nd way
// [stopButton, slowButton, goButton].forEach((button) => {
//   button.addEventListener('mouseenter', (event) => {
//     console.log(`Enter ${event.target.innerText} button`)   
//   });

//   button.addEventListener('mouseleave', (event) => {
//     console.log(`Left ${event.target.innerText} button`)   
//   });
// });

// })();

//Bonus
(function() {
  'use strict';
  let stopButton = document.getElementById('stopButton');
  let stopLight = document.getElementById('stopLight');
  let slowButton = document.getElementById('slowButton');
  let slowLight = document.getElementById('slowLight');
  let goButton = document.getElementById('goButton');
  let goLight = document.getElementById('goLight');
  
  let countStop = 0;
  stopButton.addEventListener('click', (e) => {
    if (e.target && e.target.matches('.button')) {
      stopLight.classList.toggle('stop');
      
      if (countStop % 2 === 0) {
        console.log(`${e.target.innerText} bulb on`);
      } else {
        console.log(`${e.target.innerText} bulb off`); 
      }
    } countStop++;
  });
  
  let countSlow = 0;
  slowButton.addEventListener('click', (e) => {
    if (e.target && e.target.matches('.button')) {
      slowLight.classList.toggle('slow');
      
      if (countSlow % 2 === 0) {
        console.log(`${e.target.innerText} bulb on`);
      } else {
        console.log(`${e.target.innerText} bulb off`); 
      }
    } countSlow++;
  });

  let countGo = 0;
  goButton.addEventListener('click', (e) => {
    if (e.target && e.target.matches('.button')) {
      goLight.classList.toggle('go');
      
      if (countGo % 2 === 0) {
        console.log(`${e.target.innerText} bulb on`);
      } else {
        console.log(`${e.target.innerText} bulb off`); 
      }
    } countGo++;
  });


})();