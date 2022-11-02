import React from 'react';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <img
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
        alt=''
      />
    </article>
  );
}

export default ExperienceCard;
