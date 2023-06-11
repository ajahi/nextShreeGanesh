import React from 'react';
import styles from './card.module.css'



function Card({ imageUrl, name }) {

  return (
    <div className={styles.placeCard}

    >
      <img src={imageUrl} alt={name} />
      <h3 className={styles.cardName}>{name}</h3>
    </div>);



}

export default Card;