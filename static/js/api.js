export default class API {
    async getCaracter(id){
        const respone = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await respone.json()

        return data
    }
}