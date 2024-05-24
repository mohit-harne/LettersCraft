import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderlogo from '../assets/images/sliderlogo.png'

const Slider1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
      };
  return (
    

  <div className='  w-[1094px]'>
  <Slider {...settings}>

  <div className='h-[235px] w-[258px] rounded-[16px]  justify-center px-[16px] py-[24px] bg-[#E6FFAF] hover:scale-90 transition-all'>
    <img className='h-[36px] w-[36px]' src={sliderlogo} alt='M'/><br/>
   <div className='grid gap-[4px]'>
    <h1 className='text-[16px] text-[#101D2E] font-medium leading-[22.8px] Gordita'>Certified translation and notarisation</h1>
    <h1 className='text-[16px] font-normal text-[#697587] leading-[22.8px] Gordita'>Neque nibh tincidunt amet lectus feugiat nisl varius massa</h1>
    <button className='text-[#3D65FF] text-[16px] font-medium text-left Gordita'>Learn More →</button>
   </div> 
  </div>
  
  <div className='h-[235px] w-[258px] rounded-[16px]  justify-center px-[16px] py-[24px] bg-[#FFC4B1] hover:scale-90 transition-all'>
    <img className='h-[36px] w-[36px]' src={sliderlogo} alt='M'/><br/>
   <div className='grid gap-[4px]'>
    <h1 className='text-[16px] text-[#101D2E] font-medium leading-[22.8px] Gordita'>Certified translation and notarisation</h1>
    <h1 className='text-[16px] font-normal text-[#697587] leading-[22.8px] Gordita'>Neque nibh tincidunt amet lectus feugiat nisl varius massa</h1>
    <button className='text-[#3D65FF] text-[16px] font-medium text-left Gordita'>Learn More →</button>
   </div> 
  </div>

  <div className='h-[235px] w-[258px] rounded-[16px]  justify-center px-[16px] py-[24px] bg-[#AEE7FF] hover:scale-90 transition-all'>
    <img className='h-[36px] w-[36px]' src={sliderlogo} alt='M'/><br/>
   <div className='grid gap-[4px]'>
    <h1 className='text-[16px] text-[#101D2E] font-medium leading-[22.8px] Gordita'>Certified translation and notarisation</h1>
    <h1 className='text-[16px] font-normal text-[#697587] leading-[22.8px] Gordita'>Neque nibh tincidunt amet lectus feugiat nisl varius massa</h1>
    <button className='text-[#3D65FF] text-[16px] font-medium text-left Gordita'>Learn More →</button>
   </div> 
  </div>
  
 </Slider>
</div>



  )
}

export default Slider1;


    