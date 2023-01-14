/* $(function () {
    'use strict';

    // trigger nice scroll
    $('html').niceScroll({
        scrollspeed: 6,
        cursorwidth: 10 ,
        cursorborderradius: 10 ,
        cursorborder: '5px solid #ffff00'        
    });
}); */

$(function () {
    'use strict';

    // Chevron To Move Top
    let mychevrontop = document.getElementById("chevron-top") ;
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mychevrontop.style.display = "block";
        } else {
            mychevrontop.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    $('.fa-chevron-up').click(function () {
        $('html, body').animate({
            scrollTop: $('.logo').offset().top
        }, 500);
    });
});
$(function () {
        // Get the modal
    var modal = document.getElementById('id-login');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

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