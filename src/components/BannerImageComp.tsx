import React from 'react';
import styles from '../styles/BannerImageComp.module.css';

interface BannerImageCompProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div className={styles.banner} style={{ background: background }}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.cta}>{cta}</button>
      </div>
      <button onClick={onEdit} className={styles.editButton}>✏️</button>
    </div>
  );
};

export default BannerImageComp;
