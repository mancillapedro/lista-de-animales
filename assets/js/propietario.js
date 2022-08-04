export default class Propietario {
    constructor({ propietario, direccion, telefono }) {
        const _nombre = propietario
        const _direccion = direccion
        const _telefono = telefono
        this._getDatosPropietario = () => ({
            nombre: _nombre,
            direccion: _direccion,
            telefono: _telefono
        })
    }

    get datosPropietario() { return this._getDatosPropietario() }
}