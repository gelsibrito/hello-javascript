/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
// for (let i = 1; i <= 20; i++){
//     console.log(i)
// }
// console.log("---------------------------------------------")
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
// let resultado = 0
// for (let i = 1; i <= 100; i++){
//     resultado += i
// }
// console.log(resultado)
// console.log("---------------------------------------------")

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
// let contador = 1
// while (contador <= 50){
//     if (contador % 2 == 0){
//         console.log(`numero => ${contador}`)
//     }
//     contador++
// }
//alternativa
// contador = 2
// while (contador <= 50){
//     console.log(`numero => ${contador}`)
//     contador += 2  // Salta de par en par
// }

// console.log("---------------------------------------------")
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// let miArray = ["perro", "gato", "leon", "tigre", "elefante"]
// contador = 0
// while (contador < miArray.length){
//     console.log(`Elemento ${(contador + 1)} => ${miArray[contador]}`)
//     contador++
// }
// console.log("---------------------------------------------")
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
// let text = "Gelsi Brito"
// let contadorVocales = 0
// let i = 0

// while (i < text.length){
//     let letra = text[i].toLowerCase()
    
//     if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
//         contadorVocales++
//     }
//     i++
// }

// console.log(`El texto tiene ${contadorVocales} vocales`)
// console.log("---------------------------------------------")


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
// let myArray = [ 4, 1, 7, 2, 8]
// let resultado = 1
// for (let i = 0; i < myArray.length; i++ ){
//     resultado *= myArray[i]
// }
// console.log(resultado)
// console.log("---------------------------------------------")


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
// contador = 1
// while (contador <= 12){
//     console.log(`${contador} x 5 => ${contador * 5} `)
//     contador++
// }

// 8. Usa un bucle para invertir una cadena de texto
// let text = "maduro"
// let textInvertido = ""
// for (let i = text.length - 1; i >= 0; i--){
//     textInvertido += text[i]
// }
// console.log(textInvertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
// let contador = 10
// let a = 0
// let b = 1
// console.log(a)
// console.log(b)

// for (let i = 2; i < contador; i++){
//     let siguiente = a + b
//     console.log(siguiente)
//     a = b
//     b = siguiente
// }


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10  
let myArray = [ 12, 15, 7, 21, 8]
let newArray = []
let i = 0


while (i < myArray.length){
    let valor = myArray[i]
    console.log(valor)
    if (valor > 10 ){
        newArray.push(valor)
    }    
    i++
}
console.log(newArray)