// eslint-disable jsx-props-no-spreading

import React from 'react';
import { Header } from '../../components/Header';
import { SectionBanner } from '../../components/SectionBanner';
import { MainStores } from '../../components/MainStores';
import { OurSolutions } from '../../components/OurSolutions';
import { Description } from '../../components/Description';
import { Contact } from '../../components/Contact';
import { Newletters } from '../../components/Newletters';
import { Footer } from '../../components/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SectionBanner />
      <MainStores />
      <OurSolutions />
      <Description />
      <Contact />
      <Newletters />
      <Footer />
    </>
  );
};
