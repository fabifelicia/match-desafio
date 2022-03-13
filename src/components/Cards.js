import React from 'react'
import Card from 'react-bootstrap/Card'

export function Cards({ id, name, species }) {
  return (
    <Card className='mb-3 shadow' style={{ width: '12rem'}}>
      <Card.Img
        variant='top'
        src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
      />
      <Card.Body>
        <Card.Title style={{fontFamily: 'Roboto'}} className='text-center fs-5 fw-bold'>{name}</Card.Title>
        <Card.Text style={{fontFamily: 'Roboto'}} className='text-center'>{species}</Card.Text>        
      </Card.Body>
    </Card>
  )
}
