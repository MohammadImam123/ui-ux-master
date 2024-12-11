import React from 'react';
import { experience } from '../constent';

const Experiences = () => {
  return (
    <div className='space-y-4 ml-5 pl-5 border-l-[2px] border-gray-600'>
      {experience?.map((experience, index) => (
        <div className='experience relative'>
          <h5 className='leading-none mb-1 text-gray-600'>
            {experience.role} at {experience.company}
          </h5>
          <span className='text-gray-400 lg:text-base text-sm font-medium'>
            {experience.startDate} - {experience.endDate}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
