import topbg from '../assets/images/topbg.png';
import netweb from '../assets/images/netweb.png';
import React from 'react';
import Git1 from '../assets/Git1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import map from '../assets/images/map.png';

const Contact = () => {
  return (
    <div className='lg:h-[1343px] md:h-[878px] h-[773px]'>
      {/* Top background and overlay images */}
      <div className='mt-[-80px] lg:h-[729.33px] h-[500px] md:h-[510px] overflow-hidden sticky z-20'>
        <img className='w-screen h-[500px] lg:h-[728.33px] ' src={topbg} alt='Top Background'/>
        <img className='lg:h-[692px] lg:w-[688px] h-[392px] w-[388px] mt-[-500px] lg:mt-[-730px] lg:ml-[920px] ml-[100px] md:ml-[480px] opacity-[10%]' src={netweb} alt='OverlayImage'/>
      </div>

      {/* Contact information */}
      <div className='sticky z-20 grid gap-6 lg:mt-[-530px] lg:scale-100 md:scale-90 scale-75 lg:ml-[180px] md:ml-[30px] ml-[-30px] mt-[-460px] text-white '>
        <h1 className='text-[48px] font-bold leading-[68.4px] tracking-wider lg:w-[560px] md:w-[280px]'>Contact Us</h1> 
        <div className='lg:w-[500px] md:w-[300px] flex gap-2 '>
          <FontAwesomeIcon icon={faLocationDot} className='w-[14px] h-[20px] mt-[4px] text-[#3D65FF]'/>
          <h1 className='text-[16px] text-white font-normal'>Servcorp, Suntec Tower Three, #42-01, 8 Temasek Boulevard Singapore 038988</h1>
        </div> 
        <div className='lg:w-[500px] flex gap-2 '>
          <FontAwesomeIcon icon={faPhone} className='w-[14px] h-[20px] mt-[4px] text-[#3D65FF]'/>
          <h1 className='text-[16px] text-white font-normal'>+65 8695 7260</h1>
        </div> 
        <div className='lg:w-[500px] flex gap-2 '>
          <FontAwesomeIcon icon={faPhone} className='w-[14px] h-[20px] mt-[4px] text-[#3D65FF]'/>
          <h1 className='text-[16px] text-white font-normal'>+65 6711 0135</h1>
        </div> 
        <div className='lg:w-[500px] flex gap-2 '>
          <FontAwesomeIcon icon={faEnvelope} className='w-[14px] h-[20px] mt-[4px] text-[#3D65FF]'/>
          <h1 className='text-[16px] text-white font-normal'>info@lettercrafts.org</h1>
        </div> 
        <div className='lg:w-[500px] flex gap-2 '>
          <FontAwesomeIcon icon={faClock} className='w-[14px] h-[20px] mt-[4px] text-[#3D65FF]'/>
          <h1 className='text-[16px] text-white font-normal'>09.00 AM-06.30 PM</h1>
        </div> 
      </div>

      {/* Git1 component */}
      <div className='lg:mt-[-270px] sticky z-20'><Git1 title='Send us a message' /></div>

      {/* Map image */}
      <img className='lg:h-[771px] md:h-[471px] h-[370px] w-screen lg:mt-[-220px] md:mt-[-180px] mt-[-400px] z-0' src={map} alt='Map'/>
    </div>
  );
}

export default Contact;
