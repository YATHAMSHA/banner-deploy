import React, { useState } from 'react';
import styles from '../styles/EditBannerTemplateBs.module.css';

interface EditBannerTemplateBsProps {
  ad: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (ad: { title: string; description: string; cta: string; image: string; background: string }) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ ad, onSave, onClose }) => {
  const [formData, setFormData] = useState(ad);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className={styles.bottomSheet}>
      <div className={styles.content}>
        <h2>Edit Ad Banner</h2>
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <input name="cta" value={formData.cta} onChange={handleChange} placeholder="CTA" />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <input name="background" value={formData.background} onChange={handleChange} placeholder="Background Color" />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
