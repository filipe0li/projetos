const slides = document.getElementsByClassName("mySlides");

function criaDot() {

  for (i = 0; i < slides.length; i++) { // cria ponto
    document.querySelector('.teste').innerHTML += `<span class="dot" onclick="currentSlide(${i + 1})" title="slide ${i + 1}"></span>`;
  }

  const numPag = document.querySelectorAll('.numbertext');  // cria número de páginas
  for (let i = 0; i < numPag.length; i++) {
    numPag[i].innerHTML = `${i + 1} / ${slides.length}`;
  }
}

criaDot();

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const dots = document.getElementsByClassName("dot");

  if (n == null) { // INDICA O QUE FAZER  CASO SEJA UM  CONTADOR AUTOMÁTICO
    slideIndex ++;
  }

  if (slideIndex < 1) { // PROTEÇÃO PARA CONTROLE CASO SEJA MENOR
    slideIndex = slides.length;
  }

  if (slideIndex > slides.length) { // PROTEÇÃO PARA O CONTADOR CASO SEJA MAIOR
    slideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

showSlides(1);

let intervalo = setInterval(showSlides, 4000);

function startIntervalo() {
  intervalo = setInterval(showSlides, 4000);
}

function stopIntervalo() {
  clearInterval(intervalo);
}