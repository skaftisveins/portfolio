import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/dist/client/link';
import { Social } from '../typing';

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='rgb(0,138,216)'
            bgColor='transparent'
          />
        ))}
        {/* <SocialIcon
          url='https://twitter.com/skaftisveins'
          fgColor='rgb(0,138,216)'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://instagram.com/skaftisveins'
          fgColor='rgb(0,138,216)'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://linkedin.com/skaftisveins'
          fgColor='rgb(0,138,216)'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://facebook.com/skaftisveins'
          fgColor='rgb(0,138,216)'
          bgColor='transparent'
        /> */}
      </motion.div>
      {/* <Link href='#contact'> */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-row items-center text-gray-500 cursor-pointer'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          url='https://github.com/skaftisveins'
          fgColor='rgb(0,138,216)'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Whatup
        </p>
      </motion.div>
      {/* </Link> */}
    </header>
  );
}
