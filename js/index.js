// Your code goes here
// * [xxx] `mouseover`
// * [ ] `keydown`
// * [x] `wheel`
// * [x] `drag / drop`
// * [x] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [x] `scroll`
// * [ ] `select`
// * [x] `dblclick`

//navbar mouseenter/mouseleave

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

// Image zoom 

const navDouble = document.querySelectorAll('img');
navDouble.forEach(item => {
    item.addEventListener('dblclick', e => {
    item.style.transform = 'scale(1.5)';
    item.style.transition = ' transform 0.10s';
})

});

const navReduce = document.querySelectorAll('img');
navReduce.forEach(item => {
    item.addEventListener('click', e => {
    item.style.transform = 'scale(1.0)';
    item.style.transition = ' transform 0.10s';
})

});

// Paragraph Zoom 

const pZoom = document.querySelectorAll('p');
pZoom.forEach(item =>{
    item.addEventListener('wheel', e =>{
    item.style.transform = 'scale(1.25)';
    item.style.backgroundColor = "lightyellow";
    })
})

const pZoomOff = document.querySelectorAll('p');
pZoomOff.forEach(item => {
    item.addEventListener('click', e => {
    item.style.transform = 'scale(1.0)';
    item.style.transition = ' transform 0.10s';
    item.style.backgroundColor = "white";
})

});

// Load Pop up 

window.addEventListener('load', e =>{
    alert ("Welcome to The Fun Bus! Adventure Awaits...");
});

// Rotate Images by drag

const pDrag = document.querySelectorAll('img');
pDrag.forEach(item =>{
    item.addEventListener('drag', e =>{
    item.style.transform = 'rotate(180deg)';
    })
})

//mouseover on section titles
const mouseZoom = document.querySelectorAll('h2');
mouseZoom.forEach(item => {
    item.addEventListener('mouseover', e => {
    item.style.transform = 'scale(1.5)';
    item.style.transition = ' transform 0.5s';
})

});

// Copy 

const copyAndPolice = document.querySelector('p');

copyAndPolice.addEventListener('copy', e => {
    window.alert ('You better give me credit, or Im telling the police.');
})
    


// keydown


window.addEventListener('keydown', e => {
    window.alert ('Hey, look up!!');
})
    
