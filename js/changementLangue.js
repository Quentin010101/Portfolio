const latence = 5
let intervale = 0
let indexLangue = 0
let langueTime


// update langue
function updateLangue(langue1,langue2,element){
    let x = langue1
    let y = langue2
    for(let i = 0; i < sup(x,y) + latence; i++){
            langueTime = setTimeout(()=>{
            langue1 = langue1.substring(0,i) + " " + langue1.substring(i + 1)
            if( i >= latence && langue2.length > i - latence){
                langue1 = langue1.substring(0,i - latence) + langue2.substring(i - latence, i - latence + 1) + langue1.substring(i - latence + 1)
            }
            element.innerText = langue1
        }, intervale)
        intervale += 100
    }
    intervale = 0
}

// trouver la plus grande longueur chaine de caractere
function sup (parm1,parm2){
    if(parm1.length> parm2.length){
        return parm1.length
    } else {
        return parm2.length
    }
}
// -------- Header ----------------------
let a1 = "Accueil -"
let a2 = "A propos de Moi -"
let a3 = "Projet -"
let a4 = "Contact -"

let b1 = "Home -"
let b2 = "About me -"
let b3 = "Project -"
let b4 = "Contact -"

const e1 = document.querySelector('nav li:nth-child(1) a')
const e2 = document.querySelector('nav li:nth-child(2) a')
const e3 = document.querySelector('nav li:nth-child(3) a')
const e4 = document.querySelector('nav li:nth-child(4) a')




// -------- Page Accueil ----------------
let a5 ="Formation Developpeur Web"

let b5 ="Formation Web Developer"

const e5 = document.querySelector('.container-titre h4')
// --------Bouton ----------------------
let arrStockageFr = [a1,a2,a3,a4,a5]
let arrStockageEn = [b1,b2,b3,b4,b5]
let arrStockageElement = [e1,e2,e3,e4,e5]
const bouttonLangue = document.querySelector('.container-langue')

bouttonLangue.addEventListener('click', function(){
    clearTimeout(langueTime)
    if(indexLangue == 0){
        for(let i = 0; i < arrStockageElement.length; i++){
            updateLangue(arrStockageFr[i],arrStockageEn[i],arrStockageElement[i])
        }
        indexLangue = 1    
    } else {
        for(let i = 0; i < arrStockageElement.length; i++){
            updateLangue(arrStockageEn[i],arrStockageFr[i],arrStockageElement[i])
        }
        indexLangue = 0
    }
    
})