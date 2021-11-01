let text = document.querySelector('.container-titre .span1')
let span = document.querySelectorAll('.container-titre span')
let interval = 0
let arr1 = [" ","F","r","o","n","t","-","E","n","d"]
let arr2 = [" ","B","a","c","k","-","E","n","d"]


function front (){
    for(let i = 0; i < arr1.length; i++){
        setTimeout( () => {
            text.innerText += arr1[i]
        },interval)
        interval += 200
    }
    interval += 3000
    for(let i = arr1.length - 1; i >= 0 ; i--){
        setTimeout( () => {
            text.innerText = text.innerText.substring(0, i)
        },interval)
        interval += 200
    }
    interval += 500
    back()
}
front()
function back (){
    setTimeout( () => {
        span.forEach( (element) => {
            element.style.color = "rgb(11, 139, 54)"
        })
    }, interval)
    for(let i = 0; i < arr2.length; i++){
        setTimeout( () => {
            text.innerText += arr2[i]
        },interval)
        interval += 200
    }
}