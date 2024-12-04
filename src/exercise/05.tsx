"use client"
// exo
// Utility Types
// http://localhost:3000/alone/final/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  // partie 1
  type SomeLanguage = "js" | "ts" | "java"
  // 🐶 change 'any' : exclue 'java' du type 'SomeLanguage'
  type GoodLanguage = Exclude<SomeLanguage, "java">

  const lang: GoodLanguage = "js"
  displayText(`good lang ${lang}`)

  type TypeSpecial = string | number | Function
  // 🐶 change 'any' : exclue 'Function' du type 'TypeSpecial'
  type Writable = Exclude<TypeSpecial, Function>

  const ts: TypeSpecial = () => {}
  // const w: Writable = () => {} //constate erreur de compile

  //partie 2
  // 🐶 change 'any' : prend que 'java' de 'SomeLanguage'
  type OldLangage = Extract<SomeLanguage, "java">
  // 🐶 change 'any' : prend que 'Function' de 'TypeSpecial'
  type F = Extract<TypeSpecial, Function>

  //partie
  type Age = string | number | undefined | null
  // 🐶 change 'any' : supprime les 'null' et 'undefined' de 'Age'
  type NonNullAge = NonNullable<Age>

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
