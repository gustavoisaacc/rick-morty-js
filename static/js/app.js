import API from './api.js'
import Caracter from './caracter.js'
const api = new API()
let cont = 1
const nexts = document.querySelectorAll('#next')

nexts.forEach((next)=>{
    next.addEventListener('click', async (e)=> {
        e.preventDefault()
        const caracterData = await api.getCaracter(++cont)
        const rick = new Caracter(caracterData)
    })
})

async function initApp(initCaracterId){
    const caracterData = await api.getCaracter(initCaracterId)
    console.log(caracterData)
    const rick = new Caracter(caracterData)

}

initApp(cont)
