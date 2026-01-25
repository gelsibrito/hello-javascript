/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let nombre = "Gelsi "
let apellido = "Brito"
let nombreCompleto = nombre + apellido
console.log(nombreCompleto)
console.log("----------------------------------------")

// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length)
console.log("----------------------------------------")
// 3. Muestra el primer y último carácter de un string
console.log(nombre[0])
console.log(nombre[4])
console.log("----------------------------------------")
// 4. Convierte a mayúsculas y minúsculas un string
console.log(apellido.toUpperCase())
console.log(apellido.toLowerCase())
console.log("----------------------------------------")
// 5. Crea una cadena de texto en varias líneas
let cadenaVariasLineas = `Gelsi es
un estudiante 
de programacion
`
console.log(cadenaVariasLineas)
console.log("----------------------------------------")
// 6. Interpola el valor de una variable en un string
console.log(`Gelsi ${apellido} es un estudiante de programacion`)
console.log("----------------------------------------")
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let text = "Gelsi Brito es un estudiante de programacion"
console.log(text.replaceAll(" ", "-"))
console.log("----------------------------------------")
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(text.includes("estudiante"))
console.log(text.includes("estdiante"))
console.log("----------------------------------------")
// 9. Comprueba si dos strings son iguales
let text2 = "Gelsi Brito es un estudiante de programacion"
console.log(text == text)
console.log(text == cadenaVariasLineas)
console.log(text == text2)
console.log("----------------------------------------")
// 10. Comprueba si dos strings tienen la misma longitud
console.log(text.length == text2.length)
console.log(text.length == cadenaVariasLineas.length)

