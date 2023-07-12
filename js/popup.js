let openp = document.querySelectorAll('#openp');
let openc = document.getElementById('openc');
let popup = document.querySelector('.popup-vis');
let exitp = document.querySelector('.popup-exit');
let bg = document.querySelector('.bg')

for (let i = 0; i < openp.length; i++) {
    console.log(openp[i])
    openp[i].addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = 'block';
        bg.style.display = 'block';
    });
}


bg.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = 'none';
    bg.style.display = 'none';
});
exitp.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = 'none';
    bg.style.display = 'none';
});



