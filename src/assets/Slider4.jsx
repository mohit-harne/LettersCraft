import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import birth from '../assets/images/birth.png'

const Slider4 = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
      };
  return (
    

  <div className=' w-[1400px]'>
  <Slider {...settings}>

  <div className='h-[336px] w-[275px] rounded-[20px] bg-white border-[1.5px] border-[#3D65FF] shadow-[#3d64ff37] shadow-lg'>
<img className='mt-[5px]' src={birth} alt='M'/><br/>
<div className='grid justify-center gap-2'>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Birth certificate</h1>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>$45.00</h1>
</div><br/>
  </div>
  <div className='h-[336px] w-[275px] rounded-[20px] bg-white border-[1.5px] border-[#3D65FF] shadow-[#3d64ff37] shadow-lg'>
<img className='mt-[5px]' src={birth} alt='M'/><br/>
<div className='grid justify-center gap-2'>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Birth certificate</h1>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>$45.00</h1>
</div>
  </div>
  <div className='h-[336px] w-[275px] rounded-[20px] bg-white border-[1.5px] border-[#3D65FF] shadow-[#3d64ff37] shadow-lg'>
<img className='mt-[5px]' src={birth} alt='M'/><br/>
<div className='grid justify-center gap-2'>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Birth certificate</h1>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>$45.00</h1>
</div>
  </div>
  <div className='h-[336px] w-[275px] rounded-[20px] bg-white border-[1.5px] border-[#3D65FF] shadow-[#3d64ff37] shadow-lg'>
<img className='mt-[5px]' src={birth} alt='M'/><br/>
<div className='grid justify-center gap-2'>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Birth certificate</h1>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>$45.00</h1>
</div>
  </div>
  <div className='h-[336px] w-[275px] rounded-[20px] bg-white border-[1.5px] border-[#3D65FF] shadow-[#3d64ff37] shadow-lg'>
<img className='mt-[5px]' src={birth} alt='M'/><br/>
<div className='grid justify-center gap-2'>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>Birth certificate</h1>
<h1 className='text-[16px] font-medium text-[#101D2E] w-[200px]'>$45.00</h1>
</div>
  </div>
  

 
  
 </Slider>
</div>



  )
}

export default Slider4;


    