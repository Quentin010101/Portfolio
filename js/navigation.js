// import {lien1,lien2,lien3,lien4} from "./changementLangue.js"

const sectionAccueil = document.getElementById('blanc')
const sectionAPropos = document.getElementById('section-aPropos')
const sectionProjet = document.getElementById('section-projet')
const sectionContact = document.getElementById('section-contact')

const bouttonL = document.querySelector('.container-langue')

let sectionAccueilTop = sectionAccueil.offsetTop
let sectionAProposTop = sectionAPropos.offsetTop
let sectionProjetTop = sectionProjet.offsetTop
let sectionContactTop = sectionContact.offsetTop
let arrNav = [sectionAccueilTop, sectionAProposTop, sectionProjetTop, sectionContactTop]

const l1 = document.querySelector('nav li:nth-child(1) a')
const l2 = document.querySelector('nav li:nth-child(2) a')
const l3 = document.querySelector('nav li:nth-child(3) a')
const l4 = document.querySelector('nav li:nth-child(4) a')

let arrL = [l1, l2, l3, l4]

let scrollExplication = document.querySelector('footer h6')

// --------------- Wheel ---------------------------------------------------
document.addEventListener('wheel', function (event) {
    let delta = event.deltaY
    let currentPos = document.documentElement.scrollTop
    if (delta > 0) {
        for (let i = 0; i < arrNav.length; i++) {
            if (arrNav[i] > currentPos + 5) {
                scrollTo(0, arrNav[i])
                miseAJourNav(0)
                miseAJourBoutton(i)
                return
            }
        }
    }
    if (delta < 0) {
        for (let i = arrNav.length - 1; i >= 0; i--) {
            if (arrNav[i] < currentPos - 5) {
                scrollTo(0, arrNav[i])
                miseAJourNav(1)
                miseAJourBoutton(i)
                return
            }
        }
    }
})

// --------------------Navigation changement de section ----------------


function miseAJourNav(parm) {
    let arrA = [sectionAccueil.getBoundingClientRect().top, sectionAPropos.getBoundingClientRect().top, sectionProjet.getBoundingClientRect().top, sectionContact.getBoundingClientRect().top]
    for (let i = 0; i < arrA.length; i++) {
        if (arrA[i] < 5 && arrA[i] > -5) {
            if(parm == 0){
                changeColor(i + 1)
                changeColorF(i + 1)
                return
            } else {
                changeColor(i - 1)
                changeColorF(i - 1)
                return
            }
        }
    }
}
function changeColor(parm) {
    arrL.forEach((element) => {
        if(parm == 0 || parm == 2){
            element.style.color = "var(--col-White)"
        } else {
            element.style.color = "var(--col-black)"
        }
        element.style.fontSize = "0.8em"
    })
    arrL[parm].style.color = "rgb(28, 67, 238)"
    arrL[parm].style.fontSize = "1.3em"
    arrL[parm].style.transition = "all 0.5s"
}
function changeColorF(parm) {
    if(parm == 0 || parm == 2){
        scrollExplication.style.color = "var(--col-White)"
        scrollExplication.style.transition = "color 0.5s"
    } else {
        scrollExplication.style.color = "var(--col-black)"
        scrollExplication.style.transition = "color 0.5s"
    }
}

// ---------------Mise a jour du boutton langue --------------------------

function miseAJourBoutton(parm) {
    console.log("h")
    if(parm !== 0){
        bouttonL.style.opacity = 0
        bouttonL.style.transition = "all 0.5s"
        bouttonL.style.cursor = "default"
    } else {
        bouttonL.style.opacity = 1
        bouttonL.style.transition = "all 0.5s"
        bouttonL.style.cursor = "pointer"
    }
}