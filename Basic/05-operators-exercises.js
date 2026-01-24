/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 5 + 8
let b = 8 - 4
let c = 8 / 4
let d = 8 % 4
let e = 3 * 4
let f = 7 ** 2


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    a += 8
    b *= 2
    c = a
    d -= b
    e **= c
    f /= 2
    a %= 2




// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let mayorQue = b > 2
let menorQue = a < 4
let mayorIgualQue = b >= 2
let menorIgualQue = a <= 4
let igualQue = a != 4


console.log(mayorQue)
console.log(menorQue)
console.log(mayorIgualQue)
console.log(menorIgualQue)
console.log(igualQue)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
let igualIgualque = a === 4
mayorQue = b < 2
menorQue = a > 4
mayorIgualQue = b <= 2
menorIgualQue = a >= 4
console.log("----------------------------------------")
console.log(mayorQue)
console.log(menorQue)
console.log(mayorIgualQue)
console.log(menorIgualQue)
console.log(igualIgualque)
console.log("----------------------------------------")

// 5. Utiliza el operador lógico and
let operadorAnd = (8 < 7 && 5 >=8)
console.log(operadorAnd)
console.log("----------------------------------------")

// 6. Utiliza el operador lógico or
let operadorOr = (8 < 7 || 5 >=8)
console.log(operadorOr)
console.log("----------------------------------------")

// 7. Combina ambos operadores lógicos
let operadores = (8 < 7 || 5 >= 8 && 5 > 3)
console.log(operadores)
console.log("----------------------------------------")

// 8. Añade alguna negación
let negando = !operadores
console.log(negando)
console.log("----------------------------------------")

// 9. Utiliza el operador ternario
const estudiante = true
estudiante ? console.log("Es estudiante") : console.log("No es estudiante")
console.log("----------------------------------------")


// 10. Combina operadores aritméticos, de comparáción y lógicas
let operadores2 = (8 + 7 < 7 - 3 || 5 >= 8 && 5 > 3)
console.log(operadores2)
