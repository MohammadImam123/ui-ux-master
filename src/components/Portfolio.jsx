import { motion } from 'motion/react';
import { useState } from 'react';
import { categories, portfolioData } from '../constent';
import { blurVariants, fadeBottomVariants } from '../constent/variants';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const filteredItems =
    filter === 'All'
      ? portfolioData
      : portfolioData?.filter((item) => item.category === filter);

  return (
    <section id='portfolios'>
      <div className='container lg:py-20 py-10'>
        <motion.h3
          variants={blurVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 1 }}
          className='text-gray-800 text-center'
        >
          Featured Works
        </motion.h3>
        <motion.div
          variants={fadeBottomVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='flex items-center justify-center flex-wrap gap-3 sm:mt-7 mt-5'
        >
          <button
            className={`lg:px-5 px-3 lg:py-3 py-2  lg:text-base text-sm shadow_1 rounded-md ${
              filter === 'All'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-slate-800'
            }`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`lg:px-5 px-3 lg:py-3 py-2  lg:text-base text-sm  shadow_1 rounded-md ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-800'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
        <motion.div
          variants={fadeBottomVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className='grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-10'
        >
          {filteredItems?.map((item, index) => (
            <PortfolioCard
              item={item}
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
