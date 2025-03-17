const catimage = document.getElementById('catimage')
const counter = document.getElementById('counter');
const popSound = document.getElementById('popSound');

let popCount = 0;

phucimage.addEventListener('click', () => {
  popSound.currentTime = 0;
  popSound.play();
  popCount++;
  counter.textContent = `Pops: ${popCount}`;
});