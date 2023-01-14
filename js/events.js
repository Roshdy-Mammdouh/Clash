var 
    slides = document.getElementsByClassName("mySlides"),
    dots = document.getElementsByClassName("dot"),
    slideIndex = 1,
    
    i = 0, 
    s = 0,
    t = 0,
    f = 0,
    myButton1 = document.getElementById('b-event1'),
    myButton2 = document.getElementById('b-event2'),
    myButton3 = document.getElementById('b-event3'),
    myButton4 = document.getElementById('b-event4'),
    myParagraph1 = document.getElementById('text1'),    
    myParagraph2 = document.getElementById('text2'),    
    myParagraph3 = document.getElementById('text3'),    
    myParagraph4 = document.getElementById('text4'),    
    myText1 = '1 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur, saepe dolorem',
    myText2 = '2 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur, saepe dolorem',
    myText3 = '3 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur, saepe dolorem',
    myText4 = '4 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur, saepe dolorem';

    myButton1.onclick = function () {
        'use strict';
        var typeWriter = setInterval(function() {
            document.getElementById('text1').textContent += myText1[i];
            i = i + 1;
            if(i > myText1.length - 1){
              clearInterval(typeWriter);
            }
        }, 100); 
    };
    myButton2.onclick = function () {
      'use strict';
      var typeWriter = setInterval(function() {
          document.getElementById('text2').textContent += myText2[s];
          s = s + 1;
          if(s > myText2.length - 1){
            clearInterval(typeWriter);
          }
      }, 100); 
    };
    myButton3.onclick = function () {
    'use strict';
    var typeWriter = setInterval(function() {
        document.getElementById('text3').textContent += myText3[t];
        t = t + 1;
        if(t > myText3.length - 1){
          clearInterval(typeWriter);
        }
    }, 100); 
    };
    myButton4.onclick = function () {
      'use strict';
      var typeWriter = setInterval(function() {
        document.getElementById('text4').textContent += myText4[f];
        f = f + 1;
        if(f > myText1.length - 1){
          clearInterval(typeWriter);
        }
      }, 100); 
};
 // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
 document.addEventListener('contextmenu', (e) => e.preventDefault());
 function ctrlShiftKey(e, keyCode) {
   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
 }
 document.onkeydown = (e) => {
   if (
     event.keyCode === 123 ||
     ctrlShiftKey(e, 'I') ||
     ctrlShiftKey(e, 'J') ||
     ctrlShiftKey(e, 'C') ||
     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
   )
     return false;
 };

showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
};
function currentSlide(n) {
  showSlides(slideIndex = n);
};
function showSlides(n) {
  let i;

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
};


