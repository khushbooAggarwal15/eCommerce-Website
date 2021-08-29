var MenuItems=document.getElementById("MenuItems");
MenuItems.style.maxHeight="0px";
function menutoggle(){
  if(MenuItems.style.maxHeight=="0px")
  {MenuItems.style.maxHeight="200px"
}else{
  MenuItems.style.maxHeight="0px";
}
}

var clickedPhoto=document.location;


function productClick(){
  window.location.href = 'productdetail.html';
}

function openAbout() {
  document.getElementById('about').scrollIntoView();
  }

  function openHome() {
    window.location.href = 'index1.html';
  }

  function openProduct() {
    window.location.href = 'product.html';
  }

  function myFunction() {
    alert("Form Submitted Successfully");
  }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
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