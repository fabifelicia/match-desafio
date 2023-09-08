import React from 'react'
import styles from './Card.module.css'

export function Card({ id, name, species }) {
  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <img className={styles.img}       
          src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
        />
      </div>      
        <h3 className={styles.name}>
          {name}
        </h3>
        <p className={styles.description}>
          {species}
        </p>
     
    </section>
  )
}
