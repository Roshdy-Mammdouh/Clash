var password = document.getElementById('my-password'),
    show = document.getElementById('show-password'),
    hidden = document.getElementById('hidden-password');

    show.onclick = function () {
        'use strict';
            this.style.display = 'none';
            password.setAttribute('type', 'text');
            hidden.style.display = 'block';
    };  
    hidden.onclick = function () {
        'use strict';
            this.style.display = 'none';
            password.setAttribute('type', 'password');
            show.style.display = 'block';
    };
    
    /* To Cancel Right Click  */
    document.addEventListener('contextmenu',function(e) {
        'use strict';
        e.preventDefault();
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