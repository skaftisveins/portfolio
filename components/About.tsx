import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#008ad8] text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src='https://www.splashbacks.co.uk/wp-content/uploads/2020/11/PSB215-water-splash-768x576.jpg'
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here we{' '}
          <span className='underline decoration-[#008ad8]/50'>freakin</span> go
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          necessitatibus reiciendis sint eligendi illum numquam! Nostrum, quos.
          Porro, officiis optio. Voluptas provident distinctio ea eligendi,
          fugit eaque at minima laboriosam! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Commodi, dolorem, totam sequi enim
          suscipit ipsum aspernatur saepe, accusamus quos dolorum quisquam
          facere autem libero molestiae nulla dolor? Consequatur, enim fugit.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          saepe quae quidem magnam, dolor iusto, atque impedit fugiat animi eum
          nobis soluta dolorem nam ab repellat quasi? Quos, provident
          laboriosam.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
