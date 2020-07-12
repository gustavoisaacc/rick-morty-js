import API from './api.js'
const api = new API()

const caracterContainer = document.querySelector('#caracter-container')

class Caracter {
    constructor({name, image}){
        this.name = name
        this.image = image
        this.render()
    }

    build () {
        return `
        <article class="caracter">
            <div class="caracter-grid">
                <h2 class="caracter-name">${this.name}</h2>
                <img src="${this.image}" alt="">
            </div>
        </article>
        `
    }

    render(){
        caracterContainer.innerHTML = this.build()
    }
}

async function initApp(initCaracterId){
    const caracterData = await api.getCaracter(initCaracterId)
    // const rick = new Caracter(caracterData)

}

initApp(1)
