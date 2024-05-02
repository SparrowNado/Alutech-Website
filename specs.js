// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// })



document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) { // Left arrow key
        moveSlide('prev');
    } else if (event.keyCode === 39) { // Right arrow key
        moveSlide('next');
    }
});

function moveSlide(direction) {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
    
    if (direction === 'next') {
        slide.appendChild(items[0]);
    } else if (direction === 'prev') {
        slide.prepend(items[items.length - 1]);
    }
}

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    moveSlide('next');
});

prev.addEventListener('click', function(){
    moveSlide('prev');
});
