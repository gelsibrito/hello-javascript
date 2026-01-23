/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Mi primer comentario de una linea en JavaScript

// 2. Escribe un comentario en varias líneas
/* Mi primer comentario
   de varias lineas
   en JavaScript
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = "Gelsi"
let edad = 24
let esEstudiante = true
let password = null
let apellido
let mySymbol = Symbol("valorUnico")
let numeroGrande = BigInt(9007199254741991)

// 4. Imprime por consola el valor de todas las variables
console.log(nombre)
console.log(edad)
console.log(esEstudiante)
console.log(password)
console.log(apellido)
console.log(mySymbol)
console.log(numeroGrande)
console.log("--------------------------------------------")
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof esEstudiante)
console.log(typeof password)
console.log(typeof apellido)
console.log(typeof mySymbol)
console.log(typeof numeroGrande)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Miguel"
edad = 30
esEstudiante = false
password = null
apellido = undefined
mySymbol = Symbol("otroValorUnico")
numeroGrande = BigInt(1234567890123456)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 123
edad = "treinta"
esEstudiante = null
password = undefined
apellido = Symbol("nuevoApellido")
mySymbol = true
numeroGrande = 9876543210987654n

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const provincia = "Santo Domingo"
const pi = 3.14
const tieneMascota = false
const estadoCivil = null
const telefono = undefined
const miSymbol = Symbol("constanteUnica")
const otroNumeroGrande = BigInt(1122334455667788)

// 9. A continuación, modifica los valores de las constantes
provincia = "pedrito"
pi = 57
tieneMascota = true
estadoCivil = undefined
telefono = null
miSymbol = BigInt(2158121851355)
otroNumeroGrande = Symbol("cambio de valor")


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// provincia = "pedrito"
// pi = 57
// tieneMascota = true
// estadoCivil = undefined
// telefono = null
// miSymbol = BigInt(2158121851355)
// otroNumeroGrande = Symbol("cambio de valor")