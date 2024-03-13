let h1 = document.querySelector('h1');
let body = document.querySelector('body');

let dateNow = new Date();

// Date String
let dateStr = document.createTextNode(dateNow);
let dateh2 = document.createElement('h2');
dateh2.appendChild(dateStr);
body.appendChild(dateh2);


let dateSec = dateNow.getSeconds();

// Date Seconds
let dateSecStr = document.createTextNode(dateSec);
let dateSech3 = document.createElement('h3');
dateSech3.appendChild(dateSecStr);
body.appendChild(dateSech3)


// hebrew
let hebrew = new Array(23).fill(0);
let HEBREW = hebrew.map( (d, i) => { return i + 1 } );

console.log('HEBREW :>> ', HEBREW);

// Ele disse

function Rezar() {
  let date = new Date();
  let sec = date.getSeconds();

  let dado;

  if (23 >= sec) {
    dado = sec;
  } else {
    dado = sec % 23;
  }

  let EleDisse = HEBREW[dado];

  let Fala = document.createElement('h3');

  let Disse = document.createTextNode('Ele disse ', EleDisse);

  Fala.appendChild(Disse);

  body.appendChild(Fala);
}

let eledisse = document.createElement('button');
eledisse.innerHTML = "Rezar";
eledisse.onclick = Rezar();

body.appendChild(eledisse);