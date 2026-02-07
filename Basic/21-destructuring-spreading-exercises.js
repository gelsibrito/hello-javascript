/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

/** 
 * ! 1. Usa desestructuración para extraer los dos primeros elementos de un array 
*/
// let miArray = ["perro", "gato", "leon", "tigre", "elefante"]

// let [element1, element2] = miArray
// console.log(element1)
// console.log(element2)
// console.log("------------------------------------")

/** 
 * ! 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
*/
// let miArray = ["perro", "gato", "leon", "tigre", "elefante"]

// let [element1, element2, element3 = "vacio"] = miArray

// console.log(element1)
// console.log(element2)
// console.log(element3)
// console.log("------------------------------------")

/** 
 * ! 3. Usa desestructuración para extraer dos propiedades de un objeto
*/

// let person = {
//     nombre: "Gelsi",
//     edad: 24,
//     carrera: "informatica"
// }

// let {nombre , edad} = person

// console.log(nombre)
// console.log(edad)
// console.log("------------------------------------")


/** 
 * ! 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
 * ! a nuevas variables con nombres diferentes
*/
// let person1 = {
//     nombre: "Gelsi",
//     edad: 24,
//     carrera: "informatica"
// }

// let {nombre: propiedad1 , edad: propiedad2} = person1

// console.log(propiedad1)
// console.log(propiedad2)

// console.log("------------------------------------")

/** 
 * ! 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
*/
// let car = {
//     year: "2012",
//     enginer: "v4",
//     doors: 4,
//     sport: {
//         enginer: "turbo v6",
//         doors: 2
//     }
// }

// let {sport:{enginer, doors}} = car

// console.log(enginer)
// console.log(doors)


/** 
 * ! 6. Usa propagación para combinar dos arrays en uno nuevo
*/
// let miArray1 = ["perro", "gato", "leon", "tigre", "elefante"]
// let miarray2 = ["dinosaurio", "king kong"]

// let myNewArray = [...miArray1, ...miarray2]
// console.log(myNewArray)
/** 
 * ! 7. Usa propagación para crear una copia de un array
*/
// let miArray1 = ["perro", "gato", "leon", "tigre", "elefante"]
// let myNewArray = [...miArray1]
// console.log(myNewArray)

/** 
 * ! 8. Usa propagación para combinar dos objetos en uno nuevo
*/
// let person2 = {
//     nombre: "Pedro",
//     edad: 22,
//     carrera: "informatica",
//     experiencia: 3,
//     puesto: "Desarrollo de software"
// }
// let person1 = {
//     nombre: "Gelsi",
//     edad: 24,
//     carrera: "informatica",
//     puesto: "CiberSecurity"
// }

// let newObject = {...person2, ...person1}

// console.log(newObject)

/** 
 * ! 9. Usa propagación para crear una copia de un objeto
*/
// let person1 = {
//     nombre: "Gelsi",
//     edad: 24,
//     carrera: "informatica",
//     puesto: "CiberSecurity"
// }

// let newObject = {...person1}

// console.log(newObject)

/** 
 * ! 10. Combina desestructuración y propagación
*/
let person2 = {
    nombre: "Pedro",
    edad: 22,
    carrera: "informatica",
    experiencia: 3,
    puesto: "Desarrollo de software"
}
let person1 = {
    nombre: "Gelsi",
    edad: 24,
    carrera: "informatica",
    puesto: "CiberSecurity"
}

let {edad, ...newObject} = person1

console.log(edad)
console.log(newObject)