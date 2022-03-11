import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import { Cards } from './components/Cards'
import Container from 'react-bootstrap/Container'

const App = () => {
  const [character, setCharacter] = useState([{}])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacter(data.results))
  }, [])

  return (
    <Container className='mt-3'>
      <Header />
      <div
        className='mt-3'
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
      >
        {character.map((item) => (
          <Cards
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender}
          />
        ))}
      </div>
    </Container>
  )
}

export default App
