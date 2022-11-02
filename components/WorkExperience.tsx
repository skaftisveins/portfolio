import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#008ad8] text-2xl'>
        Experience
      </h3>

      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </motion.div>
  );
}

export default WorkExperience;