/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let miArray = ["perro", "gato", "leon", "tigre", "elefante"]
console.log("--------------------------------------------------------")
// 2. Añade dos más. Uno al principio y otro al final

miArray.push("pantera")
console.log(miArray)
console.log("Después de unshift:", miArray.unshift("jirafa")) // Muestra la longitud
console.log("Array completo:", miArray) // Muestra el array
console.log("----------------------------------------------------------")



// 3. Elimina el que se encuentra en tercera posición
console.log(miArray.splice(2,1))
console.log(miArray)
console.log("-----------------------------------------------------------")

// 4. Crea un set que almacene cinco libros
let miSet = new Set(["habitos atomicos","Psicologia oscura","los 4 acuerdos","el arte de la guerra","mente millonaria"])
console.log(miSet)
console.log("-----------------------------------------------------------")
// 5. Añade dos más. Uno de ellos repetido
miSet.add("el arte de la guerra")
miSet.add("padre rico padre pobre")
console.log(miSet)
console.log("-----------------------------------------------------------")

// 6. Elimina uno concreto a tu elección
console.log(`Se elimino el elemento psicologia oscura ? ${miSet.delete("Psicologia oscura")}`)
console.log(miSet)
console.log("-----------------------------------------------------------")


// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    [1,"enero"],
    [2,"febrero"],
    [3,"marzo"],
    [4,"abril"],
    [5,"mayo"],
    [6,"junio"],
    [7,"julio"],
    [8,"agosto"],
    [9,"septiembre"],
    [10,"octubre"],
    [11,"noviembre"],
    [12,"diciembre"]
])
console.log("-----------------------------------------------------------")


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(`tiene la clave numero 5? ${myMap.has(5)}`)
console.log(`este es el valor de la clave numero 5 => ${myMap.get(5)}`)
console.log("-----------------------------------------------------------")

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let mesesVerano = ["junio", "julio", "agosto"]
myMap.set("verano", mesesVerano)
console.log(`¿Se agregó correctamente? ${myMap.has("verano")}`)
console.log(myMap)
console.log("-----------------------------------------------------------")
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = [1, 2 , 3 ] // Array declarado e inicializado
let mySet = new Set (myArray) // convirtiendo un array a set
console.log(mySet)  // verificando si se convirtio a set
myMap.set("Set", mySet)  // agregando el set a un map
console.log(myMap)  // imprimiendo el mapa a ver si se agrego correctamente
