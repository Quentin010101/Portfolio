// import {bouttonLangue} from "./changementLangue"
const ball = document.querySelector('.ball')
const essai = document.querySelector(".container-langue")
let ballIndex = 0


// ------------------- Bouton toggle langue ------------------
essai.addEventListener('click', function(){
    if(ballIndex == 0){
        ball.classList.remove('ballEssai2') 
        ball.classList.add('ballEssai1') 
        ball.style.left = (bouttonLangue.offsetWidth - ball.offsetWidth - 8) + "px"
        
        ball.style.transition = "left 1s"
        ballIndex = 1
    } else {
        ball.classList.remove('ballEssai1') 
        ball.classList.add('ballEssai2') 
        ball.style.left = 0 + "px" 
        ball.style.transition = "left 1s"
        ballIndex = 0
    }
})

// ------------------Bouton burger -------------------------------

const burger = document.querySelector('.burger')
const nav = document.querySelector('nav ul')

burger.addEventListener('click', function(){
    nav.classList.toggle('navBurger')
    boutonRotation()
})
function boutonRotation (){
    burger.classList.toggle('navBurgerRotation')
}
