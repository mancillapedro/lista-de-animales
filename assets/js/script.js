import Mascota from "./mascota.js"

const createMascota = form => {
    const entries = {}
    for (let i = 0; i < form.length - 1; i++) { entries[form[i].id] = form[i].value }
    return new Mascota(entries)
}

const listElement = text_content => {
    const itemList = document.createElement('li')
    itemList.innerHTML = `${text_content}`
    document.querySelector('#resultado>ul:last-child').appendChild(itemList)
}

const validText = text => text || `<em class="text-danger">"Información no agregada"</em>`

const printDatosAgregado = mascota => {
    const propietario = mascota.datosPropietario
    listElement(`El nombre del dueño es: ${validText(propietario.nombre)}. El domicilio es: ${validText(propietario.direccion)}, y el número telefónico de contacto es: ${validText(propietario.telefono)}`)
    listElement(`${validText(mascota.tipo)}, mientras que el nombre de la mascota es: ${validText(mascota.nombre)} y la enfermedad es: ${validText(mascota.enfermedad)}`)
}

// const ulNew = () => {
//     const ul = document.createElement('ul')
//     ul.classList.add('mt-3')
//     document.getElementById('resultado').appendChild(ul)
// }

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    document.querySelector('#resultado>ul').innerHTML = '' //
    printDatosAgregado(createMascota(form))
    document.querySelector('#resultado>ul:last-child').scrollIntoView({ behavior: "smooth" })
    // ulNew()
})