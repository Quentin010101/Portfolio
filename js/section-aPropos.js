const mod1 = document.querySelector('.module1')
const mod2 = document.querySelector('.module2')
const mod3 = document.querySelector('.module3')


const icon = document.querySelectorAll('ion-icon')

let arrModule = [mod1,mod2,mod3]

arrModule.forEach((element)=>{
    element.addEventListener('click', function(){
        let openTime
        clearTimeout(openTime)
        ouvertureIcon(element)
        openTime = setTimeout(()=>{
            element.classList.remove('moduleFerme')
            element.classList.add('moduleOuvertExtend')
            let openTime2
            openTime2 = setTimeout(()=>{
                element.classList.remove('moduleOuvertExtend')
                element.classList.add('moduleOuvert')
                element.getElementsByTagName('div')[0].classList.remove('module-container-text-opacity0')
                element.getElementsByTagName('div')[0].classList.add('module-container-text-opacity1')
            }, 500)
        }, 500)
        arrModule.forEach((elem)=>{
            if(elem !== element){
                if(elem.classList.contains('moduleOuvert')){
                    openTime = setTimeout(()=>{
                        fermetureIcon(elem)
                        elem.classList.remove('moduleOuvert')
                        elem.classList.add('moduleFerme')
                        elem.getElementsByTagName('div')[0].classList.remove('module-container-text-opacity1')
                        elem.getElementsByTagName('div')[0].classList.add('module-container-text-opacity0')
                    }, 500)
                }
            }
        })
    })
})

// -------------- Deplacement des icon ---------------
function ouvertureIcon (parm){
    let openTime2
    let iconCible = parm.getElementsByTagName('ion-icon')[0]
    iconCible.classList.remove('moduleIconFerme')
    iconCible.classList.add('moduleIconOuvertExtend')
    openTime2 = setTimeout(()=>{
        iconCible.classList.remove('moduleIconOuvertExtend')
        iconCible.classList.add('moduleIconOuvert')
    }, 500)
}
function fermetureIcon (parm){
    let openTime2
    let iconCible = parm.getElementsByTagName('ion-icon')[0]
    // iconCible.classList.add('moduleIconOuvertExtend')
    openTime2 = setTimeout(()=>{
        iconCible.classList.remove('moduleIconOuvert')
        // iconCible.classList.remove('moduleIconOuvertExtend')
        iconCible.classList.add('moduleIconFerme')
    }, 500)
}