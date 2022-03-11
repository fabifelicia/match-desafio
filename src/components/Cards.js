import React from 'react'
import Card from 'react-bootstrap/Card'

export function Cards({ id, name, status, species, gender }) {
  return (
    <Card className='mb-2 shadow' style={{ width: '16rem'}}>
      <Card.Img
        variant='top'
        src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Status: {status}</Card.Text>
        <Card.Text>Especie: {species}</Card.Text>
        <Card.Text>Genero: {gender}</Card.Text>
      </Card.Body>
    </Card>
  )
}
