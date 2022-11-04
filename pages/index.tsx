import { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Hero from './../components/Hero';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y overflow-scroll z-0'>
      <Head>
        <title>Skafti&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id='hero'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>
      <section id='experience'>
        <WorkExperience />
      </section>
      <section id='skills'>
        <Skills />
      </section>
    </div>
  );
};

export default Home;
