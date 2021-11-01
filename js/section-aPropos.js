const mod1 = document.querySelector('.module1')
const mod2 = document.querySelector('.module2')
const mod3 = document.querySelector('.module3')

const icon = document.querySelectorAll('ion-icon')

let iconIntervale
let iconIntervale1

let arrModule = [mod1,mod2,mod3]

arrModule.forEach((element) =>{
    clearTimeout(iconIntervale)
    clearTimeout(iconIntervale1)
    element.addEventListener('click', () =>{
        arrModule.forEach((elem) =>{
            if(elem == element){
                moveIconDown(element)
                moveIconLeft(element)
                iconIntervale = setTimeout(()=>{
                    elementAggrandir(element)
                    pOpacity(elem)
                }, 500)

            } else {
                iconIntervale1 = setTimeout(()=>{
                    moveIconRight(elem)
                    elementRetrecir(elem)
                    pOpacityDown(elem)
                    setTimeout(()=>{
                        moveIconUp(elem)
                    },500)
                },500)
            }
        })
    })

    
})
function moveIconDown (parm){
    parm.firstElementChild.style.bottom = "20px"
    parm.firstElementChild.style.transform = "translate(-50%,0)"
    parm.firstElementChild.style.transition = "all 0.5s"
}
function elementAggrandir(parm){
    parm.style.width = "72%"
    parm.style.transition = "width 0.4s"
    setTimeout(()=>{
        parm.style.width = "70%"
        parm.style.transition = "width 0.1s"
    },400)
}
function moveIconLeft (parm){
    parm.firstElementChild.style.left = "20px"
    parm.firstElementChild.style.transform = "translate(0,0)"
    parm.firstElementChild.style.transition = "all 0.4s"
}
function moveIconUp(parm){
    parm.firstElementChild.style.bottom = "50%"
    parm.firstElementChild.style.transform = "translate(-50%,50%)"
    parm.firstElementChild.style.transition = "all 0.5s"
}
function elementRetrecir(parm){
    parm.style.width = "8%"
    parm.style.transition = "width 0.4s"
    setTimeout(()=>{
        parm.style.width = "10%"
        parm.style.transition = "width 0.1s"
    },400)
}
function moveIconRight (parm){
    parm.firstElementChild.style.left = "50%"
    // parm.firstElementChild.style.transform = "translate(-50%,0)"
    parm.firstElementChild.style.transition = "all 0.4s"
}
function pOpacity (parm){
    parm.lastElementChild.style.opacity = "1"
    parm.lastElementChild.style.transition = "all 0.5s"
}
function pOpacityDown (parm){
    parm.lastElementChild.style.opacity = "0"
    parm.lastElementChild.style.transition = "all 0.3s"
}
