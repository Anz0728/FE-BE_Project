import React from 'react';
import ExcuseItem from './ExcuseItem';
import styles from './ExcuseList.module.css';

const ExcuseList = ({ excuses }) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.title}>실시간 핑계 피드 📢</h3>
      {excuses.map(excuse => (
        <ExcuseItem key={excuse.id} excuse={excuse} />
      ))}
    </div>
  );
};

export default ExcuseList;
