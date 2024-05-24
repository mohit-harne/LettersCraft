import React from 'react';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';
import user4 from '../assets/images/user4.png';
import starfull from '../assets/images/starfull.png';
import starhalf from '../assets/images/starhalf.png';

const Workwithus = ({ textColor1 , textcolor2 , title="Businesses love working with us" }) => {
  
  return (
    <div className='grid grid-flow-col justify-center gap-14 lg:mt-[130px] md:mt-[-50px] mt-[-160px] scale-[40%] lg:scale-100 md:scale-[60%]'>
      <div className='flex flex-col gap-12 mr-[-300px] lg:mr-0 md:mr-0'>
        <h1 className='text-[36px] font-medium w-[294px]' style={{ color: textColor1 }}>
          {title}
        </h1>
        <div className='grid grid-flow-row lg:grid-cols-2 md:grid-cols-2 gap-x-[50px] gap-y-[40px] w-[570px]'>
          <div className='w-[275px] h-[119px]'>
            <h1 className='text-[24px] font-medium text-[#3D65FF]' >250+</h1> <br />
            <h1 className='text-[16px] font-normal w-[210px]'  style={{ color: textcolor2 }}>Posuere lacus dignissim eget a venenatis aenean at interdum.</h1>
          </div>
          <div className='w-[275px] h-[119px]'>
            <h1 className='text-[24px] font-medium text-[#3D65FF]' >250+</h1> <br />
            <h1 className='text-[16px] font-normal w-[210px]'  style={{ color: textcolor2 }}>Urna tincidunt vestibulum massa placerat quis eget non viverra.</h1>
          </div>
          <div className='w-[275px] h-[119px]'>
            <h1 className='text-[24px] font-medium text-[#3D65FF]' >250+</h1> <br />
            <h1 className='text-[16px] font-normal w-[210px]'  style={{ color: textcolor2 }}>Posuere lacus dignissim eget a venenatis aenean at interdum.</h1>
          </div>
          <div className='w-[275px] h-[119px]'>
            <h1 className='text-[24px] font-medium text-[#3D65FF]' >250+</h1> <br />
            <h1 className='text-[16px] font-normal w-[210px]' style={{ color: textcolor2 }}>Urna tincidunt vestibulum massa placerat quis eget non viverra.</h1>
          </div>
        </div>
      </div>
      <div className='h-[736px] w-[570px] grid gap-[30px]'>
        <div className='flex p-[24px] rounded-[16px] shadow-lg bg-white  gap-[12px] h-[134px] border-t-[0.4px] border-gray-100 hover:scale-90 transition-all'>
          <img className='h-[56px] w-[56px]' src={user1} alt='M' />
          <div className='grid gap-[8px]'>
            <h1 className='text-[16px]' >Floyd Miles</h1>
            <div className='flex gap-1'>
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starhalf} alt='M' />
            </div>
            <h1 className='text-[16px] text-[#697587] font-normal'>“Very quick and easy! Great service, thanks!”</h1>
          </div>
        </div>
        <div className='flex p-[24px] rounded-[16px] shadow-lg bg-white  gap-[12px] border-t-[0.4px] border-gray-100 hover:scale-90 transition-all'>
          <img className='h-[56px] w-[56px]' src={user2} alt='M' />
          <div className='grid gap-[8px]'>
            <h1 className='text-[16px]' >Arlene McCoy</h1>
            <div className='flex gap-1'>
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starhalf} alt='M' />
            </div>
            <h1 className='text-[16px] text-[#697587] font-normal'>“The Services provided are really great, we received a genuine advice and at very reasonable cost. all the work went hassle-free and no complication. Mr. Qamar i...”</h1>
          </div>
        </div>
        <div className='flex p-[24px] rounded-[16px] shadow-lg bg-white gap-[12px] border-t-[0.4px] border-gray-100 hover:scale-90 transition-all'>
          <img className='h-[56px] w-[56px]' src={user3} alt='M' />
          <div className='grid gap-[8px]'>
            <h1 className='text-[16px]' >Leslie Alexander</h1>
            <div className='flex gap-1'>
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starhalf} alt='M' />
            </div>
            <h1 className='text-[16px] text-[#697587] font-normal'>“Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...”</h1>
          </div>
        </div>
        <div className='flex p-[24px] rounded-[16px] shadow-lg bg-white gap-[12px] border-t-[0.4px] border-gray-100 hover:scale-90 transition-all'>
          <img className='h-[56px] w-[56px]' src={user4} alt='M' />
          <div className='grid gap-[8px]'>
            <h1 className='text-[16px]' >Marvin McKinney</h1>
            <div className='flex gap-1'>
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starfull} alt='M' />
              <img className='h-[24px] w-[24px]' src={starhalf} alt='M' />
            </div>
            <h1 className='text-[16px] text-[#697587] font-normal'>“I ordered a Balmain T-shirt dress from here and it is fabulous. The packaging was extremely professional and nice and sweets were added in the box. Extremely sa...”</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workwithus;
