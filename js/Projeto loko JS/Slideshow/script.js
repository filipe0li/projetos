let currentSlide = 0;
let totalSlides = document.querySelectorAll('.slider--item').length;
document.querySelector('.slider--width').style.width = `calc(100% * ${totalSlides})`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  };
  updateMargin();
};

function goNext(){
  currentSlide++;
  if (currentSlide > (totalSlides -1)) {
    currentSlide = 0;
  }
  updateMargin();
};

function updateMargin() {
  let newMargin = (currentSlide * document.querySelector('.slider--item').offsetWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 3000);