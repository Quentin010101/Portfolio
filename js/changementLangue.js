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
            element.innerHTML = langue1
        }, intervale)
        intervale += 50
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
let a5 = "Utiliser le scroll pour naviguer"

let b1 = "Home -"
let b2 = "About me -"
let b3 = "Project -"
let b4 = "Contact -"
let b5 = "Use scroll to navigate"

const e1 = document.querySelector('nav li:nth-child(1) a')
const e2 = document.querySelector('nav li:nth-child(2) a')
const e3 = document.querySelector('nav li:nth-child(3) a')
const e4 = document.querySelector('nav li:nth-child(4) a')
const e5 = document.querySelector('footer h6')

// -------- Page Accueil ----------------
let a6 ="Formation Developpeur Web"

let b6 ="Formation Web Developer"

const e6 = document.querySelector('.container-titre h4')

// --------- Page à propos ----------------
let a7 = "A propos de moi"
let a8 = "En pleine reconversion professionel, j'ai choisi de me lancer dans le domaine de l'informatique. Actuellement en formation de <span>Developpeur web et web mobile</span> au centre de formation de <span>l'AFPA St Jérôme</span>, je suis à la recherche d'un stage conventioner en entreprise pour une période d'approximativement 2 mois."
let a9 = "Compétence : <span>Hard-Skills</span>"
let a10 = "Compétence : <span>Soft-Skills</span>"
let a11 = "- Esprit d'équipe"
let a12 = "- Autonome"
let a13 = "- Sens de l'organisation"
let a14 = "- Esprit d'analyse"

let b7 = "About me"
let b8 = "Curently in professional retraining, i choosed the IT sector. I'm recieving a training course of <span>Web and mobile Developeur</span> in the <span>l'AFPA St Jérôme</span> formation center, i'm searching for a contracted internship with a period of approximatly 2 months."
let b9 = "Expertise : <span>Hard-Skills</span>"
let b10 = "Expertise : <span>Soft-Skills</span>"
let b11 = "- Team spirit"
let b12 = "- Autonome"
let b13 = "- Organizational skills"
let b14 = "- Analytical mind"

const e7 = document.querySelector('.module1 h4')
const e8 = document.querySelector('.module1 p')
const e9 = document.querySelector('.module2 h4')
const e10 = document.querySelector('.module3 h4')
const e11 = document.querySelector('.module3 div p:nth-child(1)')
const e12 = document.querySelector('.module3 div p:nth-child(2)')
const e13 = document.querySelector('.module3 div p:nth-child(3)')
const e14 = document.querySelector('.module3 div p:nth-child(4)')

//---------- Page projet ----------------
const e15 = document.querySelector('.container-projet div:nth-child(1)')
let a15 = e15.innerHTML
// --------Bouton ----------------------
let arrStockageFr = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14]
let arrStockageEn = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14]
let arrStockageElement = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14]
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