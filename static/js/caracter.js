export default class Caracter {
    constructor({name, image, gender, species, status}){
        this.name = name
        this.gender = gender
        this.species = species
        this.status = status
        this.image = image
        this.caracterNameContauiner = document.querySelector('#caracter-name-container')
        this.caracterDescriptionContauiner = document.querySelector('#caracter-description-container')
        this.caracterImageContainer = document.querySelector('#caracter-image-container')
        this.caracterNamePlaceholder = document.querySelector('#caracter-name-placeholder')
        this.render()
    }

    buildImage () {
        return `
            <img  class="caracter-img" src="${this.image}" alt="${this.name}">
        `
    }
    buildName () {
        return `
            <h2 class="caracter-name">${this.name}</h2>
        `
    }
    buildDescription () {
        return `
            <div class="caracter-labels">
                <h3 class="caracter-label">Gènero: ${this.gender}</h3>
                <h3 class="caracter-label">Especie: ${this.species}</h3>
                <h3 class="caracter-label">Status: ${this.status}</h3>
            </div>
        `
    }

    render(){
        this.caracterImageContainer.innerHTML = this.buildImage()
        this.caracterNameContauiner.innerHTML = this.buildName()
        this.caracterDescriptionContauiner.innerHTML = this.buildDescription()
        this.caracterNamePlaceholder.innerHTML = this.buildName()

    }
}
