import React from 'react'

export const Pagination = ({ next, previous }) => {
  
  return (
    <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
      <li>
        {previous ?  (<button className='btn btn-primary btn-sm' onClick={previous}>Anterior</button>) : (<button className='btn btn-primary btn-sm disabled'>Anterior</button>)}
      </li>     
        <li>
        {next ? (<button className='btn btn-primary btn-sm' onClick={next}>Proximo</button>) : (<button className='btn btn-primary btn-sm disabled'>Proximo</button>)}
      </li>
    </ul>
  )
}
