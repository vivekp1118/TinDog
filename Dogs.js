// Create the Dog class here
import {data} from './data.js'

export class profiles{
    constructor(dataPassed)
    {
        Object.assign(this,dataPassed)

        this.badge = ""
        this.getBadgeHtml = (interection) => {
            if(interection == "liked")
            {
                document.querySelector(".badge").innerHTML = `
              <img src="./images/badge-like.png"></img>
            ` 
            }
            else{
                 document.querySelector(".badge").innerHTML = `
              <img src="./images/badge-nope.png"></img>
            ` 
            }
        }
        
        if(this.hasBeenLiked==true)
        {
            this.badge =  `<img src="./images/badge-like.png"></img>`
        }
        else if(this.hasBeenSwiped == true)
        {
             this.badge =  `<img src="./images/badge-nope.png"></img>`
        }
    }

    getBadgeHtml = (interection) => {
        if(interection == "liked")
        {
            document.querySelector(".badge").innerHTML = `
          <img src="./images/badge-like.png"></img>
        ` 
        }
        else{
             document.querySelector(".badge").innerHTML = `
          <img src="./images/badge-nope.png"></img>
        ` 
        }
    }

    liked = () => {
        if(!this.hasBeenLiked && !this.hasBeenSwiped){
            data.forEach(item=>{
                if(this.name == item.name)
                {
                    item.hasBeenLiked = true
                    item.hasBeenSwiped = true
                }
            })
            this.getBadgeHtml("liked")
            document.querySelector('.badge').classList.remove('hidden')
        }
    }

    cross = () => {
        if(!this.hasBeenSwiped){
            data.forEach(item=>{
                if(this.name == item.name)
                {
                    item.hasBeenSwiped = true
                }
            })
            this.getBadgeHtml("cross")
            document.querySelector('.badge').classList.remove('hidden')
        }
    }
    
    getDogsHtml = () => {
        return ` 
        <div class="image-container">
            <img src=${this.avatar} class="profile-img" ></img>
            <div class="dog-info">
                <div class="dog-name">${this.name}, <span class="dog-age">${this.age}</span></div>
                <div class="dog-bio">${this.bio}</div>
            </div>
            <div class="badge" class=${this.hasBeenSwiped ? "" :"hidden"}>
                ${this.badge}
            </div>
        </div>
        
        <div class="elements"> 
            <span class="cross-icon cross">
                <img src="./images/icon-cross.png" class="cross"></img>
            </span>
            <span class="like-icon like">
                <img src="./images/icon-heart.png" class="like"></img>
            </span>
        </div>
        `
    } 
}
