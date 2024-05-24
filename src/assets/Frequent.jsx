import React from 'react';
import FaqCard from './FaqCard';

const Frequent = () => {
  const questions = [
    "Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. Senectus?",
    "Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. Senectus?",
    "Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. Senectus?",
    "Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. Senectus?",
    "Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. Senectus?",
    "Eu lobortis nisl nulla quis cursus nisl aliquet ut metus. Senectus?"
  ];

  return (
    <div className='grid justify-center gap-8 lg:mt-[100px] md:mt-[20px] mt-[-80px] lg:scale-100 md:scale-[85%] scale-[75%]'>
      <h1 className='text-[#101D2E] text-[36px] font-medium text-center'>Frequently Asked Questions</h1>
      <div className='grid grid-flow-col lg:grid-rows-2 md:grid-rows-3 grid-rows-6 gap-6'>
        {questions.map((question, index) => (
          <FaqCard key={index} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Frequent;
