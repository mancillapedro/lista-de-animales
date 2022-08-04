import Propietario from "./propietario.js";
import Animal from "./animal.js";
import Mascota from "./mascota.js";

// datos de prueba
const datos = {
    propietario: 'propietario_1',
    direccion: 'calle bonita',
    telefono: '12345678',
    tipo: 'perro',
    nombreMascota: 'mascota_1',
    enfermedad: 'enfermedad_1'
}

// test propietario
console.log('\n---propietario---')
const propietario = new Propietario(datos)
console.table(propietario.datosPropietario)

// test animal
console.log('\n---animal---')
const animal = new Animal(datos)
console.log(animal.tipo)
console.table(animal.datosPropietario)

// test mascota
console.log('\n---gets mascota---')
const mascota = new Mascota(datos)
const mascotaGets = (mascota) => ({
    'Nombre mascota:': mascota.nombre,
    'Enfermedad mascota:': mascota.enfermedad,
    'Tipo mascota:': mascota.tipo,
    'Datos propietario mascota:': mascota.datosPropietario
})

// gets mascota
console.table(mascotaGets(mascota))

// sets mascotas
console.log('\n--- datos nuevos ---')
mascota.nombre = 'new_nombre_mascota'
mascota.enfermedad = 'new_enfermedad'

console.table(mascotaGets(mascota))
