var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function replaceImage(index) {
  var before = document.getElementsByClassName('before');
  var after = document.getElementsByClassName('after');
  var a = document.getElementsByTagName('a');
  before[index].style.display = "none";
  after[index].style.display = "inline";
  if(index == 0)
    index = index + 5;
  else
    index = (index*4) + 5;
  a[index].style.color = "#FFC61A";
}

function revertImage(index) {
  var before = document.getElementsByClassName('before');
  var after = document.getElementsByClassName('after');
  var a = document.getElementsByTagName('a');
  before[index].style.display = "inline";
  after[index].style.display = "none";
  if(index == 0)
    index = index + 5;
  else
    index = (index*4) + 5;
  a[index].style.color = "#000000";
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}