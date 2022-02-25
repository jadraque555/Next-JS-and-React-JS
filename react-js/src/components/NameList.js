import React from 'react'
import Person from './Person'

function NameList() {
    const personList = [
        {
            id: 1,
            name: "Jayson Jadraque",
        },
        {
            id: 2,
            name: "Frank Lloyd P. Flores"
        }, 
        {
            id: 3,
            name: "Dems Flores"
        },
        {
            id: 4,
            name: "James Flores"
        },
        {
            id: 5,
            name: "Christian Lim"
        },
        {
            id: 6,
            name: "Ronald Flores"
        }
    ]
    const person = personList.map((person, index) => <Person key={person.id} person={person} /> )

  return (
    <div>{person}</div>
  )
}

export default NameList