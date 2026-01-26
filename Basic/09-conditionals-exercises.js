/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Gelsi"
if (nombre === "Gelsi") {
    console.log(nombre)
} else {
    console.log("Error.....")
}
console.log("------------------------")

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "gelsi01"
let password = "159263"
if (user === "gelsi01" && password === "159263") {
    console.log("Iniciando sesion.......")
    console.log("Sesion iniciada!!!")
} else {
    console.log("Usuario o contraseña incorrecta....")
}
console.log("------------------------")

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0
if (numero > 0){
    console.log(`El numero ${numero} es positivo!`)
} else if (numero === 0){
    console.log(`El numero es ${numero}!`)
} else { 
    console.log(`El numero ${numero} es negativo!`)
}
console.log("------------------------")


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15
if (edad >= 18) {
    console.log("Eres mayor de edad!")
}else {
    let anosFaltantes = 18 - edad
    console.log(`Te faltan ${anosFaltantes} años para ser mayor de edad!`)
}
console.log("------------------------")

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let resultado = edad >= 18 ? "Adulto" : "Menor"
console.log(resultado)
console.log("------------------------")


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "febrero"
let mesMinuscula = mes.toLowerCase()
if (mesMinuscula === "diciembre" || mesMinuscula === "enero" || mesMinuscula === "febrero") {
    console.log("Es invierno!")
} else if (mesMinuscula === "marzo" || mesMinuscula === "abril" || mesMinuscula === "mayo") {
    console.log("Es primavera!")
} else if (mesMinuscula === "junio" || mesMinuscula === "julio" || mesMinuscula === "agosto"){
    console.log("Es verano!")
} else if (mesMinuscula === "septiembre" || mesMinuscula === "octubre" || mesMinuscula === "noviembre"){
    console.log("Es otoño!")
} else {
    console.log("Introduzca un mes valido!")
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mesMinuscula === "enero" || mesMinuscula === "marzo" || mesMinuscula === "mayo" 
    || mesMinuscula === "julio" || mesMinuscula === "agosto" || mesMinuscula === "octubre" 
    || mesMinuscula === "diciembre" ){
        console.log(`El mes de ${mesMinuscula} tiene 31 dias.`)
    } else if (mesMinuscula === "abril" || mesMinuscula === "junio" || mesMinuscula === "septiembre" 
    || mesMinuscula === "noviembre"){
        console.log(`El mes de ${mesMinuscula} tiene 30 dias.`)
    } else if (mesMinuscula === "febrero"){ 
        console.log(`El mes de ${mesMinuscula} tiene 28 o 29 dias dependiendo el año.`)
    } else {
        console.log("Error, introduzca un mes valido!")
    } 

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let opcion = 3
switch (opcion){
    case 1: console.log("Saludo")
    break
    case 2: console.log("Hello, ingles")
    break
    case 3: console.log("Bonjour, Frances")
    break
    case 4: console.log("Buongiorno, italiano")
    break
    case 5: console.log("Konnichiwa, japones")
    break
    case 6: console.log("Bonjou, creole")
    break
    default: console.log("Opcion incorrecta!")
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let opcion2 = "enero"
let opcion2Minuscula = opcion2.toLowerCase()
switch (opcion2Minuscula){
    case "enero": console.log("Es invierno!")
    break
    case "febrero": console.log("Es invierno!")
    break
    case "marzo": console.log("Es primavera!")
    break
    case "abril": console.log("Es primavera!")
    break
    case "mayo": console.log("Es primavera!")
    break
    case "junio": console.log("Es verano!")
    break
    case "julio": console.log("Es verano!")
    break
    case "agosto": console.log("Es verano!")
    break
    case "septiembre": console.log("Es otoño!")
    break
    case "octubre": console.log("Es otoño!")
    break
    case "noviembre": console.log("Es otoño!")
    break
    case "diciembre": console.log("Es invierno!")
    break
    default: console.log("Opcion incorrecta!")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (opcion2Minuscula){
    case "enero": 
    case "marzo": 
    case "mayo": 
    case "julio": 
    case "agosto": 
    case "octubre": 
    case "diciembre": 
        console.log(`El mes de ${opcion2Minuscula} tiene 31 dias.`)
    break
    case "abril": 
    case "junio":
    case "septiembre": 
    case "noviembre": 
        console.log(`El mes de ${opcion2Minuscula} tiene 30 dias.`)
    break
    case "febrero": console.log(`El mes de ${opcion2Minuscula} tiene 28 o 29 dias dependiendo el año.`)
    break
    default: console.log("Opcion incorrecta!")
}