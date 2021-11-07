
const projet1 = document.querySelector('.container-projet > div:nth-child(1)')
const projet2 = document.querySelector('.container-projet > div:nth-child(2)')
const projet3 = document.querySelector('.container-projet > div:nth-child(3)')

const root = document.querySelector(':root')

let animationTime = getComputedStyle(root).getPropertyValue("--animationProjetTime")
console.log(animationTime)
let time = (animationTime.substring(0, animationTime.length - 1)) * 1000

let arrProjet = [projet1, projet2, projet3]



arrProjet.forEach((element) => {
    element.addEventListener('click', function () {
        if (element.classList.contains('projet-position1')) {
            arrProjet[0].classList.remove('projet-position1')
            arrProjet[0].classList.add('projet-position3')
            arrProjet[0].classList.add('retrecirPosition')
            setTimeout(() => {
                arrProjet[2].classList.remove('retrecirPosition')
            }, time)
            arrProjet[1].classList.remove('projet-position2')
            arrProjet[1].classList.add('projet-position1')
            arrProjet[2].classList.remove('projet-position3')
            arrProjet[2].classList.add('projet-position2')
            let arrStockage = arrProjet.shift()
            arrProjet.push(arrStockage)
        } else if (element.classList.contains('projet-position3')) {
            arrProjet[0].classList.remove('projet-position1')
            arrProjet[0].classList.add('projet-position2')
            arrProjet[1].classList.remove('projet-position2')
            arrProjet[1].classList.add('projet-position3')
            arrProjet[2].classList.remove('projet-position3')
            arrProjet[2].classList.add('projet-position1')
            arrProjet[2].classList.add('retrecirPosition')
            setTimeout(() => {
                arrProjet[0].classList.remove('retrecirPosition')
            }, time)
            let arrStockage = arrProjet.pop()
            arrProjet.unshift(arrStockage)
        }
        arrProjet.forEach((element) => {
            setTimeout(()=>{
                if (element.classList.contains('projet-position2')) {
                    element.querySelector('.projet > div:nth-child(3)').classList.remove('container-invisibleOuvert')
                    element.querySelector('.projet > div:nth-child(3)').classList.add('container-invisibleFerme')
                } else {
                    element.querySelector('.projet > div:nth-child(3)').classList.add('container-invisibleOuvert')
                    element.querySelector('.projet > div:nth-child(3)').classList.remove('container-invisibleFerme')
                }
            }, 600)
        })

    })
})