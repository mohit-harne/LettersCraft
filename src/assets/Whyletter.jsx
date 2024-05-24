import React from 'react';
import think from '../assets/images/think.png';
import tick from '../assets/images/tick.png';

const Whyletter = ({ textColor }) => {
  return (
    <div className='flex lg:flex-row md:flex-row flex-col lg:mt-[100px] md:mt-[50px] mt-[-270px] lg:gap-[100px] md:gap-[00px] gap-[0px] lg:items-end items-center md:ml-[-150px] lg:ml-0 ml-[-00px]  lg:scale-100 md:scale-90 scale-[60%]'>
      <img className='w-[610px] h-[585px] lg:scale-100 md:scale-[70%] scale-[60%]' src={think} alt='M' />
      <div className='w-[600px] flex flex-col gap-[60px]'>
        <h1 className={`text-${textColor} text-[36px] font-medium`}>Why LetterCrafts?</h1>

        <div className='grid gap-[36px]'>
          <div className='flex gap-2'>
            <img className='h-[32px] w-[32px]' src={tick} alt='M' />
            <h1 className={`text-${textColor} text-[16px] font-medium`}>We provide quick, affordable and high-quality Certified Translations & Notarisation Services.</h1>
          </div>
          <div className='flex gap-2'>
            <img className='h-[32px] w-[32px]' src={tick} alt='M' />
            <div className='grid gap-2'>
              <h1 className={`text-${textColor} text-[16px] font-medium`}>Our translated documents are accepted in all the government bodies in Singapore:</h1>
              <div>
                <p className={`text-${textColor} text-[16px] font-normal`}>
                  • ICA, MOM, LTA, ROM.<br />
                  • Visa, Immigration & Embassy submissions<br />
                  • PR applications<br />
                  • Notarization service is available on request<br />
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <img className='h-[32px] w-[32px]' src={tick} alt='M' />
            <h1 className={`text-${textColor} text-[16px] font-medium`}>We value your business and understand the importance of accurate translations.</h1>
          </div>
          <div className='flex gap-2'>
            <img className='h-[32px] w-[32px]' src={tick} alt='M' />
            <div className='grid gap-2'>
              <h1 className={`text-${textColor} text-[16px] font-medium`}>To ensure professional-grade translations, we only engage industry experts and native translators. We help our clients with:</h1>
              <div>
                <p className={`text-${textColor} text-[16px] font-normal`}>
                  • Business and Ecommerce documentation translations<br />
                  • Personal document translations<br />
                  • Banking, Legal and Contracts translations<br />
                  • Websites, Apps and Product Description translations<br />
                  • Technical, IT and Medical translations<br />
                  • Advertising and Marketing translations<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyletter;
