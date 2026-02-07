/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

/** 
 * !1. Crea un objeto con 3 propiedades
*/
let person = {
    nombre: "Gelsi",
    edad: 24,
    carrera: "informatica"
}

/** 
 * ! 2. Accede y muestra su valor
*/
console.log(person)
console.log("--------------------------------------------------------")
/** 
 * ! 3. Agrega una nueva propiedad
*/
person.experiencia = 10

/** 
 * ! 4. Elimina una de las 3 primeras propiedades
*/
delete person.edad
console.log(person)
console.log("--------------------------------------------------------")

/** 
 * ! 5. Agrega una función e invócala
*/
person.estado = function() {console.log("Trabajando!!!")}
person.estado()
console.log("--------------------------------------------------------")

/** 
 * ! 6. Itera las propiedades del objeto
*/
for (let value in person){
    console.log(value + " : " + person[value])
}
console.log("--------------------------------------------------------")


/** 
 * ! 7. Crea un objeto anidado
*/
let car = {
    year: "2012",
    enginer: "v4",
    doors: 4,
    sport: {
        enginer: "turbo v6",
        doors: 2
    }
}
console.log(car.sport)
console.log("--------------------------------------------------------")

/** 
 * !  8. Accede y muestra el valor de las propiedades anidadas
*/
console.log(car.sport.doors)
console.log(car.sport.enginer)
console.log("--------------------------------------------------------")

/** 
 * ! 9. Comprueba si los dos objetos creados son iguales
*/
console.log(person === car)
console.log("--------------------------------------------------------")

/** 
 * ! 10. Comprueba si dos propiedades diferentes son iguales
*/
console.log(person.nombre === car.enginer)



/** 
 * ! ejercicio del curso de dalto la historia de cofla 2, ejercicio 2
*/
let cantidad = prompt("cuantos alumnos son?")
let alumnosTotales = []

for (let i = 0; i < cantidad; i++){
    alumnosTotales[i] =[prompt("Nombre del alumno " + (i+1)), 0] 
}

const tomarAsistencia = (nombre, p) =>{
    let presencia = prompt(nombre)
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++
    }
}
for (let i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno)
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]} : <br>
    _____________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    _____________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b> <br>`
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style= 'color:red'> REPROBADO POR INASISTENCIAS</b> <br> <br>"
    } else {
        resultado+= "<br></br>"
    }
    document.writeln(resultado)
}
