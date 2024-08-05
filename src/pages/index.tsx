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

  const ads = [

    {
      "title": "Ad Banner 1",
      "description": "This is the first ad banner.",
      "cta": "Learn More",
      "image": "/public/images/img1.jpg",
      "background": "#606060",
      "imageWidth": 600,
      "imageHeight": 300
    },
    {
      "title": "Ad Banner 2",
      "description": "This is the second ad banner.",
      "cta": "Buy Now",
      "image": "/public/images/img2.jpg",
      "background": "#BEBEBE",
      "imageWidth": 600,
      "imageHeight": 300
    },
    {
      "title": "Ad Banner 3",
      "description": "This is the third ad banner.",
      "cta": "Sign Up",
      "image": "/public/images/img3.jpg",
      "background": "#D8D8D8",
      "imageWidth": 600,
      "imageHeight": 300
    }
  ];
  return {
    props: {
      ads,
    },
  };
};

export default HomePage;
