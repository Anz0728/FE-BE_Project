import React, { useState } from 'react';
import styles from './ExcuseItem.module.css';

const ExcuseItem = ({ excuse }) => {
  const [likes, setLikes] = useState(excuse.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.nickname}>{excuse.nickname}</span>
        <span className={styles.category}>#{excuse.category}</span>
      </div>
      
      <div className={styles.body}>
        <span className={styles.emotion}>{excuse.emotion}</span>
        <p className={styles.content}>{excuse.content}</p>
      </div>
      
      <div className={styles.footer}>
        <span className={styles.date}>{excuse.createdAt}</span>
        <button 
          className={`${styles.likeBtn} ${isLiked ? styles.active : ''}`}
          onClick={handleLike}
        >
          👍 인정 {likes}
        </button>
      </div>
    </div>
  );
};

export default ExcuseItem;
