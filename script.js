<<<<<<< HEAD
// Navigation toggle
const toggle = document.getElementById('toggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero image slideshow
const hero = document.querySelector('.hero');
const images = [
    'CSS/IMAGES/Wedding Decor 1.jpg',
  'CSS/IMAGES/Fish.jpg',
  'CSS/IMAGES/Strange Rice.jpg',
];

let index = 0;

images.forEach(src => {
  const img = new Image();
  img.src = src;
});


function changeHeroBackground() {
  hero.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeHeroBackground(); // Set first image
setInterval(changeHeroBackground, 5000); // Change every 5 seconds
=======
// Navigation toggle
const toggle = document.getElementById('toggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero image slideshow
const hero = document.querySelector('.hero');
const images = [
    'CSS/IMAGES/Wedding Decor 1.jpg',
  'CSS/IMAGES/Fish.jpg',
  'CSS/IMAGES/Strange Rice.jpg',
];

let index = 0;

images.forEach(src => {
  const img = new Image();
  img.src = src;
});


function changeHeroBackground() {
  hero.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeHeroBackground(); // Set first image
setInterval(changeHeroBackground, 5000); // Change every 5 seconds
>>>>>>> 01cfaa4c66af939493dfa8ea0b3cc80b889358d4
