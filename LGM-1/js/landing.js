// The Resonsive menu
const drop = document.querySelector('.nav--menu')

function showMenu() {
      drop.style.right="0";
}

function hideMenu() {
      drop.style.right="-200px";
}

// SCRIPT : image slider
const img = document.querySelector('#slide--img')
const circle_button = document.querySelectorAll('.controls div')


const images = [     
'./requirements/bg 1.png' ,
'./requirements/bg 2.jpg' 
]

const img_len = images.length
let i =0

function slide(){
      if(i > img_len-1)
            i = 0;
      img.src = images[i]
      i++
}


//  Script for changing the slider buttons

var slidernav = function(manual){
      circle_button.forEach((btn) => {
            btn.classList.remove('active')
      })
      circle_button[manual].classList.add('active')
}

circle_button.forEach((input,j) => {
      input.addEventListener('click',() => {
            slidernav(j)
            slide()
      })
})


// Video Gallery

const video_player = document.querySelector('.video--source')
const video = document.querySelector('#my--video')
const times = document.querySelector('.close--btn')

// Listening for the close button
times.addEventListener('click',() => {
      video_player.style.display = 'none'
})

function playVideo(file){
      video.src = file
      video_player.style.display = 'block'
}

// Script for Snaps section

const imgs = document.querySelectorAll('.image--caraousel')
const main_img = document.querySelector('#main--snaps')
function showSnap(file){
      main_img.src = file
}