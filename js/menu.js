const connectportfolio = document.getElementById('portfolio');
const connectabout = document.getElementById('about');
const connectcontact = document.getElementById('contact');
const exitbtn = document.querySelector('.exit');
const hamburguerconnect = document.querySelector('.hamburguer');
const menumobile = document.querySelector('.menumobile');

function appear() {
  menumobile.style.display = 'block';
}

function disappear() {
  menumobile.style.display = 'none';
  document.body.style.overflow = 'auto';
}

exitbtn.addEventListener('click', disappear);
hamburguerconnect.addEventListener('click', appear);
connectportfolio.addEventListener('click', disappear);
connectabout.addEventListener('click', disappear);
connectcontact.addEventListener('click', disappear);
