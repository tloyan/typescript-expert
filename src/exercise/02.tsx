"use client"
// Décorateurs
// http://localhost:3000/alone/final/02.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice
  // 🐶 implemente la fonction sealed qui sera utiliser comme decorateur de classe
  function sealed(constructor: Function) {
    console.log("sealed()", constructor)
    Object.seal(constructor)
  }

  function enumerable(value: boolean) {
    console.log("enumerable(): factory evaluated")
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log(target)
      console.log(propertyKey)
      console.log(descriptor)
      descriptor.enumerable = value
    }
  }

  // 🐶 utilise le decorateur @sealed sur la classe Book
  // et constate que le code : Book.constructor = () => {}
  // génére une erreur : Cannot add property constructor, object is not extensible
  @sealed
  class Book {
    type = "pdf"
    title: string

    constructor(t: string) {
      this.title = t
    }

    @enumerable(false)
    getName() {
      return this.title
    }
  }
  // Book.constructor = () => {}
  const book = new Book("Harry Potter")

  displayText(book.getName())

  const book2 = new Book("La semaine de 4h")
  displayText(book2.getName())

  for (let key in book) {
    console.log("key Book", key) // type , title, getName
  }

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
