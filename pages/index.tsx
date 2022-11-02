import { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import WorkExperience from '../components/WorkExperience';
import Hero from './../components/Hero';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Skafti&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
    </div>
  );
};

export default Home;
