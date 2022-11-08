import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {};

const ContactMe = ({}: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#008ad8] text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Yo - got a request for me.{''}
          <span className='underline decoration-[#008ad8]/50'>Lets Talk.</span>
        </h4>

        <div>
          <div className='flex items-center'>
            <PhoneIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
