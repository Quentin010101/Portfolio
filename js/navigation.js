const sectionAccueil = document.getElementById('blanc')
const sectionAPropos = document.getElementById('section-aPropos')
const sectionProjet = document.getElementById('section-projet')
const sectionContact = document.getElementById('section-contact')

const l1 = document.querySelector('nav li:nth-child(1) a')
const l2 = document.querySelector('nav li:nth-child(2) a')
const l3 = document.querySelector('nav li:nth-child(3) a')
const l4 = document.querySelector('nav li:nth-child(4) a')

let scrollExplication = document.querySelector('footer h6')
let burgerIcon = document.querySelector('.burger')
let backgroundNav = document.querySelector('nav ul')

let arrL = [l1, l2, l3, l4]
let arrNav

//---------- Mise a jour couleur onload ------------------------
checkEverySectionPosition()
miseAJourNav(checkPosition())
miseAJourColor(checkPosition(), burgerIcon)
miseAJourColor(checkPosition(), backgroundNav)
// ------------ Navigation on scroll ------------------------------------------
function checkDeltaY(parm) {                                                                       //----------- Vérifie si le scroll est positif ou negatif
    if (parm.deltaY > 0) {
        return true
    } else {
        return false
    }
}
function checkEverySectionPosition() {                                                             //------------ Trouve la position du haut de chaque section par raport au haut du document
    let sectionAccueilTop = sectionAccueil.offsetTop
    let sectionAProposTop = sectionAPropos.offsetTop
    let sectionProjetTop = sectionProjet.offsetTop
    let sectionContactTop = sectionContact.offsetTop

    arrNav = [sectionAccueilTop, sectionAProposTop, sectionProjetTop, sectionContactTop]
}
function checkNextPosition(parm) {                                                                // ----------- retourne la position to scroll to en fonction du delta
    if (parm == 1) {
        for (let i = 0; i < arrNav.length; i++) {
            if (arrNav[i] > checkPosition()) {
                return arrNav[i]
            } 
        }
        return arrNav[3]    //-- pour ne pas revenir a la page d'acceuil lors du scroll
    } else {
        for (let i = arrNav.length; i >= 0; i--) {
            if (arrNav[i] < checkPosition()) {
                return arrNav[i]
            }
        }
    }
}
function checkPosition() {                                                                          //----------- trouve la position de la fenetre
    let currentPosition = document.documentElement.scrollTop
    return currentPosition
}
function scrollToPosition(parm) {
    checkEverySectionPosition()
    if (checkDeltaY(parm)) {
        scrollTo(0, checkNextPosition(1))
        miseAJourNav(checkNextPosition(1))
        miseAJourColor(checkNextPosition(1), burgerIcon)
        miseAJourColor(checkNextPosition(1), scrollExplication)
        miseAJourColor(checkNextPosition(1), backgroundNav)
        
    } else {
        scrollTo(0, checkNextPosition(0))
        miseAJourNav(checkNextPosition(0))
        miseAJourColor(checkNextPosition(0), burgerIcon)
        miseAJourColor(checkNextPosition(0), scrollExplication)
        miseAJourColor(checkNextPosition(0), backgroundNav)
    }
}
document.addEventListener('wheel', function (event) {
    scrollToPosition(event)
})
// ---------------- Navigation on click -------------------------------------
arrL.forEach((element)=>{
    element.addEventListener('click', function(){
        switch(element){
            case l1: miseAJourColor(arrNav[0], backgroundNav); miseAJourColor(arrNav[0], scrollExplication); miseAJourColor(arrNav[0], burgerIcon); changeColor(0) ; break;
            case l2: miseAJourColor(arrNav[1], backgroundNav); miseAJourColor(arrNav[1], scrollExplication); miseAJourColor(arrNav[1], burgerIcon); changeColor(1) ; break;
            case l3: miseAJourColor(arrNav[2], backgroundNav); miseAJourColor(arrNav[2], scrollExplication); miseAJourColor(arrNav[2], burgerIcon); changeColor(2) ; break;
            case l4: miseAJourColor(arrNav[3], backgroundNav); miseAJourColor(arrNav[3], scrollExplication); miseAJourColor(arrNav[3], burgerIcon); changeColor(3) ; break;
        }
    })
})

//-----------------Mise à jour couleur de la nav ----------------------------
function miseAJourNav(position) {
    switch(position){
        case arrNav[0]: changeColor(0) ; break;
        case arrNav[1]: changeColor(1) ; break;
        case arrNav[2]: changeColor(2) ; break;
        case arrNav[3]: changeColor(3) ; break;
    }
}
function changeColor (parm){

    if(parm == 0 || parm == 2){
        arrL.forEach((element)=>{
            element.classList.remove('navColorClasseSpecial')
            element.classList.remove('navColorClasseWhite')
            element.classList.remove('navColorClasseBlack')
            element.classList.add('navColorClasseWhite')
        })
    } else {
        arrL.forEach((element)=>{
            element.classList.remove('navColorClasseSpecial')
            element.classList.remove('navColorClasseWhite')
            element.classList.remove('navColorClasseBlack')
            element.classList.add('navColorClasseBlack')
        })
    }
    arrL[parm].classList.remove('navColorClasseWhite')
    arrL[parm].classList.remove('navColorClasseBlack')
    arrL[parm].classList.add('navColorClasseSpecial')
}
//---------Mise à jour color burger-----------------------------------------
function miseAJourColor(position, element){
    switch(position){
        case arrNav[0]: elementChangeColor(0, element)  ; break;
        case arrNav[1]: elementChangeColor(1, element)  ; break;
        case arrNav[2]: elementChangeColor(0, element)  ; break;
        case arrNav[3]: elementChangeColor(1, element)  ; break;
    }
}
function elementChangeColor (parm, element){
    
    if(parm == 0){
        if(element == backgroundNav){
            element.classList.remove('ulBackgroundWhite')
            element.classList.add('ulBackgroundBlack')
        } else {
            element.classList.remove('elementColorClasseBlack')
            element.classList.add('elementColorClasseWhite')
        }
    } else {
        if(element == backgroundNav){
            element.classList.remove('ulBackgroundBlack')
            element.classList.add('ulBackgroundWhite')
        } else {
            element.classList.remove('elementColorClasseWhite')
            element.classList.add('elementColorClasseBlack')
        }
    }
}