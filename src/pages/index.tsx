import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head'; 
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import styles from '../styles/Home.module.css';

interface HomePageProps {
  ads: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    imageWidth: string;
    imageHeight: string; 
  }[];
}

const HomePage: React.FC<HomePageProps> = ({ ads: initialAds }) => {
  const [ads, setAds] = useState(initialAds);
  const [editingAd, setEditingAd] = useState<any>(null);

  const handleEdit = (index: number) => {
    setEditingAd({ ...ads[index], index });
  };

  const handleSave = (updatedAd: any) => {
    const updatedAds = [...ads];
    updatedAds[editingAd.index] = updatedAd;
    setAds(updatedAds);
    setEditingAd(null);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ad-Banner</title>
        <link rel="icon" href="/images/favicon.jpg" /> 
      </Head>
      <h1 className={styles.title}>Ad Banners</h1>
      {ads.map((ad, index) => (
        <BannerImageComp
          key={index}
          title={ad.title}
          description={ad.description}
          cta={ad.cta}
          image={ad.image}
          background={ad.background}
          imageWidth={ad.imageWidth}
          imageHeight={ad.imageHeight}
          onEdit={() => handleEdit(index)}
        />
      ))}
      {editingAd && (
        <EditBannerTemplateBs
          ad={editingAd}
          onSave={handleSave}
          onClose={() => setEditingAd(null)}
        />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/ads.json');
  const ads = await res.json();

  return {
    props: {
      ads,
    },
  };
};

export default HomePage;
