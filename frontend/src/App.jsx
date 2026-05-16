import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import ExcuseList from './components/excuse/ExcuseList';
import ExcuseForm from './components/excuse/ExcuseForm';
import HallOfFame from './components/sidebar/HallOfFame';
import VoteBox from './components/sidebar/VoteBox';
import BattleBanner from './components/sidebar/BattleBanner';
import styles from './App.module.css';
import { MOCK_EXCUSES, HALL_OF_FAME as MOCK_HOF, CURRENT_VOTE } from './services/mockData';

function App() {
  const [excuses, setExcuses] = useState(MOCK_EXCUSES);

  const handleAddExcuse = (newExcuse) => {
    setExcuses([newExcuse, ...excuses]);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Hero bestExcuse={MOCK_HOF[0].content} />
      
      <main className={styles.main}>
        <section className={styles.leftContent}>
          <ExcuseForm onAdd={handleAddExcuse} />
          <ExcuseList excuses={excuses} />
        </section>
        
        <aside className={styles.sidebar}>
          <HallOfFame items={MOCK_HOF} />
          <VoteBox vote={CURRENT_VOTE} />
          <BattleBanner />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
