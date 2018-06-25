var slideIndex = new Array(2);
slideIndex[0]=1;
slideIndex[1]=1;

showSlides(1, 0);  
showSlides(1, 1);

function plusSlides(n, slideshownumber) {
  slideIndex[slideshownumber] = slideIndex[slideshownumber] + n; 
  showSlides( slideIndex[slideshownumber], slideshownumber );
}

function currentSlide(n, slideshownumber) {
  slideIndex[slideshownumber] = n;
  showSlides(slideIndex[slideshownumber], slideshownumber);
}

function showSlides(n, slideshownumber) {

  var i;

  // building de div name for the slider
  
  var slideshowname = "slider" + slideshownumber;
  var slides = document.getElementsByName(slideshowname);

  if (n > slides.length) {
      slideIndex[slideshownumber] = 1;
  }

  if (n < 1) {
      slideIndex[slideshownumber] = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex[slideshownumber]-1].style.display = "block";

} 