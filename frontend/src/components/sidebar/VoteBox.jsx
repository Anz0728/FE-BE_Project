import React, { useState } from 'react';
import styles from './VoteBox.module.css';

const VoteBox = ({ vote }) => {
  const [selected, setSelected] = useState(null);
  const total = vote.votesA + vote.votesB + (selected ? 1 : 0);
  
  const getPercent = (count) => Math.round((count / total) * 100);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>오늘의 핑계 투표 🗳️</h3>
      <p className={styles.question}>{vote.question}</p>
      
      <div className={styles.options}>
        <button 
          className={`${styles.option} ${selected === 'A' ? styles.selected : ''}`}
          onClick={() => setSelected('A')}
          disabled={!!selected}
        >
          <div className={styles.label}>{vote.optionA}</div>
          {selected && <div className={styles.bar} style={{ width: `${getPercent(vote.votesA + (selected === 'A' ? 1 : 0))}%` }} />}
          {selected && <span className={styles.percent}>{getPercent(vote.votesA + (selected === 'A' ? 1 : 0))}%</span>}
        </button>

        <button 
          className={`${styles.option} ${selected === 'B' ? styles.selected : ''}`}
          onClick={() => setSelected('B')}
          disabled={!!selected}
        >
          <div className={styles.label}>{vote.optionB}</div>
          {selected && <div className={styles.bar} style={{ width: `${getPercent(vote.votesB + (selected === 'B' ? 1 : 0))}%` }} />}
          {selected && <span className={styles.percent}>{getPercent(vote.votesB + (selected === 'B' ? 1 : 0))}%</span>}
        </button>
      </div>
    </div>
  );
};

export default VoteBox;
