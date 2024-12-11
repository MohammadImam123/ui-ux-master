import { Copyright } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='container pb-5 text-center'>
        <p className='text-gray-800 flex items-center justify-center gap-1'>
          <Copyright className='size-5' /> 2024 Imamul Hasan. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
