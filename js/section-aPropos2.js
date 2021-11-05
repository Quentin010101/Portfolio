const mod1 = document.querySelector('.module1')
const mod2 = document.querySelector('.module2')
const mod3 = document.querySelector('.module3')

const mod1Text = mod1.getElementsByTagName('div')[0]
const mod2Text = mod2.getElementsByTagName('div')[0]
const mod3Text = mod3.getElementsByTagName('div')[0]

const icon = document.querySelectorAll('ion-icon')

let arrModule = [mod1,mod2,mod3]
let arrModuleText = [mod1Text,mod2Text,mod3Text]

arrModule.forEach((element)=>{
    element.addEventListener('click', function(){
        element.classList.add('moduleOuvert')
        element.classList.remove('moduleFerme')
        arrModule.forEach((elem)=>{
            if(elem != element){
                elem.classList.add('moduleFerme')
                elem.classList.remove('moduleOuvert')
            }
        })
    })
})