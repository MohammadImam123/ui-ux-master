import { portfolioCaseStudy } from '../constent';

const PortfolioCaseStudy = ({ title }) => {
  const caseStudy = portfolioCaseStudy.find((item) => item.title === title);

  return (
    <div className='w-[90vw] h-[90vh] md:max-w-[1500px] md:max-h-[800px] bg-white rounded-xl p-5  overflow-hidden'>
      <div className='grid md:grid-cols-2 gap-5  items-start h-full'>
        <div className='md:h-full h-[calc(45vh-40px)] overflow-y-auto scroll-one p-2 overscroll-contain'>
          <img
            src={caseStudy?.image}
            alt={caseStudy?.title}
            className='w-full h-auto object-cover'
          />
        </div>
        <div className='md:h-full h-[calc(45vh-40px)] p-2 overflow-y-auto scroll-one overscroll-contain'>
          <div>
            <span className='bg-blue-100 px-5 py-2 rounded-[100vmax] !leading-none text-sm mb-2 inline-block font-medium'>
              {caseStudy?.category}
            </span>
            <h4>{caseStudy?.title}</h4>
            <p className='mt-3 text-gray-500 max-w-[500px]'>
              {caseStudy?.description}
            </p>
            <h5 className='mt-5 mb-2'>Challenges</h5>
            <ul className='list-disc pl-5 space-y-1'>
              {caseStudy?.challenges?.map((item, idx) => (
                <li
                  key={idx}
                  className='text-gray-500'
                >
                  {item}
                </li>
              ))}
            </ul>
            <h5 className='mt-5 mb-2'>Solutions</h5>
            <ul className='list-disc pl-5 space-y-1'>
              {caseStudy?.solutions?.map((item, idx) => (
                <li
                  key={idx}
                  className='text-gray-500'
                >
                  {item}
                </li>
              ))}
            </ul>
            <h5 className='mt-5 mb-2'>Outcomes</h5>
            <ul className='list-disc pl-5 space-y-1'>
              {caseStudy?.outcomes?.map((item, idx) => (
                <li
                  key={idx}
                  className='text-gray-500'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCaseStudy;
