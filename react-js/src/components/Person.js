import React from 'react'

function Person({person}) {
  return (
    <div key={person.id}><h3>{person.name}</h3></div>
  )
}

export default Person