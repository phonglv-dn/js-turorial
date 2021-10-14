let galleris = document.querySelectorAll('.gallery img');
let modal = document.querySelector('.modal');
let fullImg = document.querySelector('.full-img');

console.log(galleris);

galleris.forEach(function (gallerisItem) {
    gallerisItem.addEventListener('click', function(){
        modal.classList.add('open');
        let imgAlt = gallerisItem.getAttribute('alt');
        fullImg.src = `./img/full/${imgAlt}.jpg`;
        fullImg.classList.add('open');
    })
})

modal.addEventListener('click', function(e) {
    if(modal.classList.contains('open')) {
        modal.classList.remove('open');
    }
})
