// Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

//navbar mouseover

const navUp = document.querySelector(".nav");
navUp.addEventListener("mouseenter", e => {
  navUp.style.transform = 'scale(1.25)';
  navUp.style.transition = ' transform 0.10s';
});

const navDown = document.querySelector(".nav");
navDown.addEventListener("mouseleave", e => {
  navDown.style.transform = 'scale(1.0)';
  navDown.style.transition = ' transform 0.10s';
});

// Button Click 
const afterButton = document.querySelectorAll('.btn');
afterButton.forEach(item => {
    item.addEventListener('click', e => {
    item.style.backgroundColor ="orange";
    item.style.color ="white";
    item.style.transition = 'color 0.25s';
})

});