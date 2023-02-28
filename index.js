// Remember to import the data and Dog class!
import {data} from './data.js'
import {profiles} from './Dogs.js'

function getNewDog()
{
    let temp = data[0]
    data.shift()
    data.push(temp)
    return new profiles(temp)
}

let dog =  getNewDog()
render()

function render(){
    document.querySelector(".container").innerHTML = dog.getDogsHtml()
}

document.addEventListener("click",likeAndNope)

function likeAndNope(e)
{
   if(e.target.classList.contains('like'))
   {
       dog.liked()
       dog = getNewDog()
       setTimeout(()=>{
           render()
       },1500)
   }
   else if(e.target.classList.contains('cross'))
   {
        dog.cross()
        dog = getNewDog()
        setTimeout(()=>{
           render()
        },1500)
   }
}

