import React, { useState } from 'react';
import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';

const FaqCard = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-[450px] h-auto rounded-[16px] shadow-lg flex py-6 px-4 gap-2'>
      <div className='w-[390px]'>
        <h1 className='text-[#101D2E] text-[16px] font-medium'>{question}</h1>
        {isOpen && (
          <div className='text-[#697587] text-[16px] font-normal'>
            Turpis dui enim sed nisl facilisis. Tortor sapien bibendum nibh imperdiet suspendisse mauris dolor lacus lectus. Semper a eu lectus nisi augue. Condimentum augue ante nunc ornare amet.
          </div>
        )}
      </div>
      <div className='toggle-container cursor-pointer' onClick={handleToggle}>
        <img className='h-[18px] w-[18px] mt-[10px]' src={isOpen ? minus : plus} alt='Toggle' />
      </div>
    </div>
  );
};

export default FaqCard;
