import Animal from "./animal.js"

export default class Mascota extends Animal {
    constructor({ propietario, direccion, telefono, tipo, nombreMascota, enfermedad }) {
        super({ propietario, direccion, telefono, tipo })
        let _nombre = nombreMascota
        let _enfermedad = enfermedad
        this._getNombreMascota = () => _nombre
        this._setNombreMascota = (new_nombre) => { _nombre = new_nombre }
        this._getEnfermedadMascota = () => _enfermedad
        this._setEnfermedadMascota = (new_enfermedad) => { _enfermedad = new_enfermedad }
    }

    get nombre() { return this._getNombreMascota() }
    set nombre(new_nombre) { this._setNombreMascota(new_nombre) }
    get enfermedad() { return this._getEnfermedadMascota() }
    set enfermedad(new_enfermedad) { this._setEnfermedadMascota(new_enfermedad) }
}