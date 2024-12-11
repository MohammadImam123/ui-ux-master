import React from 'react';
import { skills } from '../constent';

const Skills = () => {
  return (
    <div className='flex items-center gap-3 flex-wrap'>
      {skills?.map((skill, index) => (
        <span
          key={skill.id}
          className='lg:px-5 py-3 p-3 bg-white rounded-md leading-none font-medium lg:text-base text-sm shadow-md text-gray-500'
        >
          {skill.level}
        </span>
      ))}
    </div>
  );
};

export default Skills;
