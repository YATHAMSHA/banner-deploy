import React from 'react';

interface AdBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const AdBanner: React.FC<AdBannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div style={{ background: background, padding: '20px', borderRadius: '8px', marginBottom: '20px', position: 'relative' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>{cta}</button>
      <button onClick={onEdit} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>✏️</button>
    </div>
  );
};

export default AdBanner;
