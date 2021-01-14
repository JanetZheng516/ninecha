var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

var cardMenuItems = document.getElementsByClassName('card-menu');
for (const item of cardMenuItems) {
  item.addEventListener('click', () => {
    if(!item.className.includes('card-menu--active')){
      item.classList.add('card-menu--active')
    } else {
      item.classList.remove('card-menu--active')
    }
  });
}

// Back to top
window.onscroll = function() {scrollFunction()};
 
let t;
function scrollFunction() {
  clearTimeout(t);
  t = setTimeout(toggleTopBtn, 100);
}

function toggleTopBtn() {
  if (document.body.scrollTop > document.getElementsByClassName('navbar')[0].scrollHeight || document.documentElement.scrollTop > document.getElementsByClassName('navbar')[0].scrollHeight) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}