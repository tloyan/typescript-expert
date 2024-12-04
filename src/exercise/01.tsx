"use client"
// Iterator
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  type Student = {
    name: string
  }

  class MikeSchool implements Iterable<Student> {
    private done: boolean
    private index: number
    constructor(private values: Student[]) {
      this.done = false
      this.index = 0
    }

    [Symbol.iterator](): Iterator<Student> {
      console.log("iterator")
      return this
    }

    next(): IteratorResult<Student> {
      console.log("next")
      if (this.index < this.values.length) {
        return {
          value: this.values[this.index++],
          done: false,
        }
      } else {
        return {
          value: null,
          done: true,
        }
      }
    }
  }

  const mikeSchool = new MikeSchool([{ name: "mike" }, { name: "john" }])

  // 🐶 decommente pour faire fonctionner l'iterator
  for (const value of mikeSchool) {
    console.log("of", value)
    displayText(value.name)
  }

  // 🐶 Fais la meme chose en appelant explicitement un 'iterator' 'while' et 'next'
  // let iterator = mikeSchool[Symbol.iterator]()

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
