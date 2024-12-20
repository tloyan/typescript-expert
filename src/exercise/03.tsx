"use client"
// Utility Types
// http://localhost:3000/alone/final/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  // partie 1
  interface User {
    name: string
    adress: string
  }

  // 🐶 Change le type 'Any' en utilisant User et un utility Types
  function updateUser(user: User, fieldsToUpdate: Partial<User>) {
    return { ...user, ...fieldsToUpdate }
  }

  const user1: User = {
    name: "Mike",
    adress: "Paris",
  }

  const user2: User = updateUser(user1, {
    adress: "Bali",
  })
  displayText(`${user2.name} habite ${user2.adress}`)

  // partie 2
  // 🐶 Nous avons props avec 2 propriétés optionnelles
  type Props = {
    title?: string
    subtitle?: string
  }

  const prop: Props = { title: "Welcome" }
  displayText(`prop : ${prop.title}`)

  // 🐶 change Props pour avoir props avec toutes les proprités obligatoire
  const prop2: Required<Props> = { title: "Welcome", subtitle: "world" }
  displayText(`prop2 : ${prop2.title} : ${prop2.subtitle}`)

  // partie 3
  // 🐶 Modfifie User pour que l'on puisse pas faire : user3.name= "Mike"
  const user3: Readonly<User> = {
    name: "Delete inactive users",
    adress: "Bali",
  }
  // user3.name = "Mike"
  console.log(user3)

  // partie 3 - bis
  // 🐶 Modfifie le type 'any' de user4 pour que l'on puisse pas faire : user4.name= "Mike"
  // et que addreese soit optionnelle
  const user4: Readonly<Partial<User>> = {
    name: "Delete inactive users",
  }
  // user4.name = "Mike"
  console.log(user4)
}
export default () => <App exercice={exercice} />
