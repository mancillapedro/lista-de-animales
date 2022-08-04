import Propietario from "./propietario.js"

export default class Animal extends Propietario {
    constructor({ propietario, direccion, telefono, tipo }) {
        super({ propietario, direccion, telefono })
        const _tipo = tipo
        this._getTipoAnimal = () => _tipo
    }
    get tipo() { return `El tipo de animal es un: ${this._getTipoAnimal()}` }
}