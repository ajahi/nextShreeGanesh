"use client";
import styles from './home.module.css';
import Card from '@/components/card/card';
import CardDetail from '@/components/card/cardDetail/cardDetail';
import { InView, useInView } from 'react-intersection-observer';
import React, { useState } from 'react';

const places = [
  {
    id: 1,
    name: 'Begnas',
    imageUrl: 'https://uptohimalaya.com/wp-content/uploads/2018/07/pokhara-sightseeing.jpg',
    description: 'yo begnas ho bhai hera yah thari thari ko maxa ra manxe basxan. yah dhani dekhi garib ra garib dekhi dhani duitae ko teti kai jamat xa.'
  },
  {
    id: 2,
    name: 'Piple',
    imageUrl: 'https://uptohimalaya.com/wp-content/uploads/2018/07/Davis_Falls-Pokhara-1024x768.jpg',
    description: 'yo ho piple piple ma mata chiple. chiple ra puge tall ma tall ma chiso chiso kati Anek_Kannada.'
  },
  {
    id: 3,
    name: 'Majhikuna',
    imageUrl: 'https://uptohimalaya.com/wp-content/uploads/2018/07/Guptesor-Cave-Pokhara-1024x683.jpg',
    description: 'yo ho majhikuna yo chai sapse chaleko thau begnas ko sajilo bato xaena jaile pani bike ma jana parne'
  },
  {
    id: 4,
    name: 'Panchvaiya',
    imageUrl: 'https://uptohimalaya.com/wp-content/uploads/2018/07/Guptesor-Cave-Pokhara-1024x683.jpg',
    description: 'yo ho pachvaiya yah pach ota vaiya basdaenan nepali nai basxan . '
  },
  {
    id: 5,
    name: 'hhdhdh',
    imageUrl: 'https://uptohimalaya.com/wp-content/uploads/2018/07/Guptesor-Cave-Pokhara-1024x683.jpg',
    description: 'djjsdffjsdfsdj skdfjksdjfksdjf ksdjfksjfsjf kfjsdjfsjf'
  },
]

const Home = () => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the card enters the view
  });

  const handleCardClick = (card) => {
    setSelectedCard(card);
    console.log(card)
    console.log('Card clicked');
  };

  return (
    <div className={styles.container}>
      <section className={styles.searchSection}>
        <div className={styles.searchBackground}>
          <input type="text" placeholder="Search for places .... 🔎" />
        </div>
      </section>
      < hr />
      <section className={styles.placesSection}>
        <h1 className={styles.sectionHeading}>Places to visit</h1>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div className={styles.leftColumn}>
              {places.map(place => (
                <div onClick={handleCardClick}>
                  <Card                  
                    key={place.id}
                    imageUrl={place.imageUrl}
                    name={place.name}
                   
                  ></Card>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.rightColumn}
            inView={InView}
            >
              {selectedCard && (
                <CardDetail
                  ref={ref}
                  
                  description={selectedCard.description}
                  key={selectedCard.id}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <p className={styles.aboutSection}>makischot ipsum dolor sit, amet consectetur adipisicing elit. Ad hic
          laudantium consequuntur maiores repellendus aliquam dolor eius vel,
          doloremque numquam minima aliquid ut corporis est, ipsa
          reprehenderit explicabo voluptates eligendi pariatur accusantium
          illum veritatis dolorum, magnam corrupti? Tempora amet at quisquam
          eligendi nemo illo temporibus sed distinctio facere beatae, aliquid
          a, facilis totam. Labore cumque non minima amet, maiores facere placeat
          sint qui reprehenderit, asperiores, laborum aliquid perferendis voluptates
          animi nobis explicabo assumenda. Omnis reprehenderit temporibus reiciendis
          placeat accusantium provident voluptatum voluptas incidunt. Reprehenderit,
        </p>
      </section>
    </div>
  );
};

export default Home;
