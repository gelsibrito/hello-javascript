/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
// function suma(a, b){
//     return a + b
// }
// let resultado = suma(5 , 2)
// console.log(resultado)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
// let myArray = [5, 8, 3, 6, 9, 7, 4]

// let devolverArray = function(array) {
//     let mayor = array[0]
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > mayor){
//             mayor = array[i]
//         }
//     }
//     return mayor
// }

// console.log(devolverArray(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
// let textPrueba = "Gelsi Brito"

// let devolverNumVocales = function(text){
//     let numVocales = 0
//     for (let i = 0; i < text.length; i++){
//         let letras = text[i].toLowerCase()
//         if (letras === 'a' || letras === 'e' || letras === 'i' || letras === 'o' || letras === 'u'){
//             numVocales++
//         }
//     }
//     return numVocales
// }

// console.log(devolverNumVocales(textPrueba))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
// let miArray = ["perro", "gato", "leon", "tigre", "elefante"]

// let newArrayMayuscula = function(array){
//     let newArray = []
//     for (let i = 0; i < array.length; i++){
//         let elementArray = array[i]
//         newArray.push(elementArray.toUpperCase())
//     }
//     return newArray
// }
// console.log(newArrayMayuscula(miArray))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// function numPrimo(num){
//     if (num <= 1) return false

//     let verificando = true
//     for (let i = 2; i < num; i ++){
//         if (num % i === 0){
//             verificando = false
//         }
//     }
//     return verificando
// }
// console.log(numPrimo(1))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
// let myArray1 = ["perro", "gato", "leon", "tigre", "elefante"]
// let myArray2 = ["pablito", "gato", "leon", "tigre", "david"]

// let elementsComunes = (array1, array2) => {
//     let newArray = []
//     for (let i = 0; i < array1.length; i++){
//         let elementArray1 = array1[i].toLowerCase()

//         for (let j = 0; j < array2.length; j++){
//             let elementArray2 = array2[j].toLowerCase()
//             if (elementArray1 === elementArray2) newArray.push(elementArray1)
//         }
        
//     }
//     return newArray
// }

// console.log(elementsComunes(myArray1, myArray2))

/** 
 * ! 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares 
 * */ 
// let myArray = [5, 8, 3, 6, 9, 7, 4]

// let sumaArray = (array) => {
//     let suma = 0
//     for(let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 0) suma += array[i]
//     }
//     return suma
// }
// console.log(sumaArray(myArray))


/** 
 * ! 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado 
 * */ 
// let myArray = [5, 8, 3, 6, 9, 7, 4]

// let newArrayCuadrado = (array) => array.map(element => element ** 2)
    
// console.log(newArrayCuadrado(myArray))

/** 
 * ! 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
**/
// let text1 = "Gelsi Brito"

// let textInverso = (text) => {
//     let array1 = []
//     array1 = text.split(" ")
//     let arrayInvertido = array1.reverse()
//     text = arrayInvertido.join(" ")

//     return text
// }
// console.log(textInverso(text1))

// let textInverso2 = (text) => {
//     return text.split(" ").reverse().join(" ")
// }

// console.log(textInverso2(text1))



/** 
 *! 10. Crea una función que calcule el factorial de un número dado
 * */ 

// mi version
let factorial = (n) => {
    let a = 0
    let b = n
    for(let i = n -1; i > 0; i--){
        a = i * b
        b = a
    }
    return b
}

console.log(factorial(4))

// version de claude ia
let factorial2 = (n) => {
    let resultado = 1  // Empieza en 1 (no en 0)
    
    for(let i = 1; i <= n; i++){
        resultado *= i  // Multiplica acumulando
    }
    
    return resultado
}