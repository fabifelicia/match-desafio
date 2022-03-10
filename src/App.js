import React, { useState, useEffect } from 'react'
import { Card } from './components/Card'

const App = () => {
  const [character, setCharacter] = useState([{}])

  useEffect(() => {
    getData()    
  }, [])

  async function getData() {
    await fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((results) => setCharacter(results.results))          
  }
  

  return (
    <>
      <h1>Rick and Morty</h1>      
      <div>
          {character.map(item => <Card id={item.id} name={item.name} status={item.status} species={item.species} gender={item.gender} />)}        
      </div>
    </>
  )
}

export default App
