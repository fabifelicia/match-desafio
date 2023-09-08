import React, { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Pagination } from './components/Pagination'
import Container from 'react-bootstrap/Container'
import { Player } from '@lottiefiles/react-lottie-player'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState([{}])
  const [pageUrl, setPageUrl] = useState(
    'https://rickandmortyapi.com/api/character'
  )

  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()

  useEffect(() => {
    const url = pageUrl
    getData(url)
  }, [pageUrl])

  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()

    setLoading(false)

    setCharacter(data.results)
    setNextPageUrl(data.info.next)
    setPrevPageUrl(data.info.prev)
  }

  function nextPage() {
    setPageUrl(nextPageUrl)
  }

  function prevPage() {
    setPageUrl(prevPageUrl)
  }

  if (loading) {
    return (
      <Player
        autoplay
        loop
        src='https://lottie.host/7a62bdb8-e213-4b95-bf9d-2ea9fa7bc13f/8ruxZFKDwn.json'
        style={{ height: 'auto', width: '500px' }}
      ></Player>
    )
  }

  return (
    <>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',          
          alignItems: 'center',          
        }}        
      >
        <Header />
        <div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 15 }}
        >
          {character.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              species={item.species}
            />
          ))}
        </div>
      </Container>
      <Pagination
        next={nextPageUrl ? nextPage : null}
        previous={prevPageUrl ? prevPage : null}
      />
    </>
  )
}

export default App
