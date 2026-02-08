/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

/** 
   * !1. Crea una clase que reciba dos propiedades
*/

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

/** 
   * !2. Añade un método a la clase que utilice las propiedades
*/

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     text(){
//         console.log(`My name is ${this.name} and i have ${this.age} ages!`)
//     }
// }

/** 
   * !3. Muestra los valores de las propiedades e invoca a la función
*/


// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     text(){
//         console.log(`My name is ${this.name} and I have ${this.age} ages!`)
//     }
// }
// let person1 = new Person("Gelsi", 24)


// console.log(person1.name)
// console.log(person1.age)
// person1.text()


/** 
   * !4. Añade un método estático a la primera clase
*/

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     text(){
//         console.log(`My name is ${this.name} and I have ${this.age} ages!`)
//     }
//     static information(){
//         console.log("I am a person!!!")
//     }
// }

// let person1 = new Person("Gelsi", 24)

// console.log(person1.name)
// console.log(person1.age)
// person1.text()


/** 
   * !5. Haz uso del método estático
*/

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     text(){
//         console.log(`My name is ${this.name} and I have ${this.age} ages!`)
//     }
//     static information(){
//         console.log("I am a person!!!")
//     }
// }

// let person1 = new Person("Gelsi", 24)

// console.log(person1.name)
// console.log(person1.age)
// person1.text()
// Person.information()


/** 
   * !6. Crea una clase que haga uso de herencia
*/

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     text(){
//         console.log(`My name is ${this.name} and I have ${this.age} ages!`)
//     }
//     static information(){
//         console.log("I am a person!!!")
//     }
// }

// let person1 = new Person("Gelsi", 24)

// console.log(person1.name)
// console.log(person1.age)
// person1.text()
// Person.information()


// class Empleado extends Person {

// }

// let empleado1 = new Empleado("Pedro", 44)
// console.log(empleado1.name)
// console.log(empleado1.age)
// empleado1.text()
// Empleado.information()


/** 
   * !7. Crea una clase que haga uso de getters y setters
*/


// class Person {

//     #name
//     #age

//     constructor(name = "pablito", age = 20){
//         this.#name = name
//         this.#age = age
//     }

//     get name (){
//         return this.#name
//     }
//     set age (age){
//         this.#age = age
//     }
//     get age (){
//         return this.#age
//     }

//     text(){
//         console.log(`My name is ${this.name} and I have ${this.age} ages!`)
//     }
//     static information(){
//         console.log("I am a person!!!")
//     }
// }

// let person1 = new Person("Gelsi", 24)

// console.log(person1.name)
// console.log(person1.age)
// person1.text()
// Person.information()


/** 
   * !8. Modifica la clase con getters y setters para que use propiedades privadas
*/

// class Person {

//     #name
//     #age

//     constructor(name = "pablito", age = 20){
//         this.#name = name
//         this.#age = age
//     }

//     get name (){
//         return this.#name
//     }
//     set age (age){
//         this.#age = age
//     }
//     get age (){
//         return this.#age
//     }

//     text(){
//         console.log(`My name is ${this.name} and I have ${this.age} ages!`)
//     }
//     static information(){
//         console.log("I am a person!!!")
//     }
// }

// let person1 = new Person("Gelsi", 24)

// console.log(person1.name)
// console.log(person1.age)
// person1.text()
// Person.information()


/** 
   * !9. Utiliza los get y set y muestra sus valores
*/

// class Person {

//     #name
//     #age

//     constructor(name = "pablito", age = 20){
//         this.#name = name
//         this.#age = age
//     }

//     get name (){
//         return this.#name
//     }
//     set age (age){
//         this.#age = age
//     }
//     get age (){
//         return this.#age
//     }

//     text(){
//         console.log(`My name is ${this.name} and I have ${this.age} ages!`)
//     }
//     static information(){
//         console.log("I am a person!!!")
//     }
// }

// let person1 = new Person("Gelsi", 24)

// console.log(person1.name)
// console.log(person1.age)
// person1.age = 25
// person1.text()
// Person.information()


/** 
   * !10. Sobrescribe un método de una clase que utilice herencia 
*/

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     text(){
//         console.log(`My name is ${this.name} and I have ${this.age} ages!`)
//     }
//     static information(){
//         console.log("I am a person!!!")
//     }
// }

// let person1 = new Person("Gelsi", 24)

// console.log(person1.name)
// console.log(person1.age)
// person1.text()
// Person.information()


// class Empleado extends Person {

//     text() {
//         console.log(`My name is ${this.name}, I have ${this.age} ages and I am employer!`)
//     }
// }

// let empleado1 = new Empleado("Pedro", 44)
// console.log(empleado1.name)
// console.log(empleado1.age)
// empleado1.text()
// Empleado.information()