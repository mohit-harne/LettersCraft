import topbg from '../assets/images/topbg.png'
import netweb from '../assets/images/netweb.png'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUser, faEnvelope, faMobileAlt, faLanguage, faTruck, faTag, faStar, faGaugeHigh  } from '@fortawesome/free-solid-svg-icons';
import bluewavebg from '../assets/images/bluewavebg.png'
import Slider4 from '../assets/Slider4';
import Workwithus from '../assets/Workwithus';
import Tprocess from '../assets/Tprocess';
import blackDottedline from '../assets/images/blackDottedline.png'
import Frequent from '../assets/Frequent';
import Whyletter from '../assets/Whyletter';
const Language = () => {
 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        slanguage: '',
        tlanguage: '',
        deliveryoption: '',
        message: ''
      });
    
      const [alert, setAlert] = useState({ message: '', type: '' });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.send('service_ewqg84d', 'template_yp8g86n', formData, 'l2y9_rZAX4J6fTgQB')
          .then((result) => {
            console.log(result.text);
            setAlert({ message: 'Email sent successfully!', type: 'success' });
          }, (error) => {
            console.log(error.text);
            setAlert({ message: 'Failed to send email. Please try again.', type: 'error' });
          });
    
        // Reset form fields after submission (optional)
        setFormData({
          name: '',
          email: '',
          phone: '',
          slanguage: '',
          tlanguage: '',
          deliveryoption: '',
          message: ''
        });
      };
  return (
    <div  className='lg:h-[6320px] md:h-[4980px] h-[5650px]'>
         <div className='mt-[-80px]  lg:h-[729.33px] h-[500px] md:h-[510px] overflow-hidden z-0 '>
      <img className='  w-screen h-[500px] lg:h-[728.33px] ' src={topbg} alt='M'/>
      <img className='lg:h-[692px] lg:w-[688px] h-[392px] w-[388px] mt-[-500px] lg:mt-[-730px] lg:ml-[920px] ml-[100px] md:ml-[480px] opacity-[10%]' src={netweb} alt='M'/>
      </div>
      <div className='lg:mt-[-530px] lg:scale-100 md:scale-90 scale-75 lg:ml-[180px] md:ml-[30px] ml-[-30px] mt-[-460px] text-white '>
        <h1 className='text-[48px] font-bold leading-[68.4px] tracking-wider lg:w-[560px] md:w-[200px]'>Professional & Native Chinese Translations</h1>  
      </div>
      <div className='bg-white shadow-lg lg:ml-[842px] w-[550px] rounded-2xl md:ml-[320px] ml-[-80px] md:mt-[-350px] lg:mt-[-120px] mt-[-100px] lg:scale-100 md:scale-75 scale-[60%] py-4 grid justify-center '>
      <div className='lg:w-[420px] md:w-[420px] w-[430px] grid gap-[24px]'>
            <h1 className='text-[36px] font-medium'>Get a quote</h1>
          </div>
          <div className='lg:w-[472px] md:w-[472px] w-[430px]'>
            {alert.message && (
              <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                {alert.message}
              </div>
            )}
            <form onSubmit={sendEmail}>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"></label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faUser} className="text-[#101D2E]" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="shadow appearance-none border rounded-[5px] w-full py-2 pl-10 pr-3 text-[#697587] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"></label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#101D2E]" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="shadow appearance-none border rounded-[5px] w-full py-2 pl-10 pr-3 text-[#697587] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone"></label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faMobileAlt} className="text-[#101D2E]" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="shadow appearance-none border rounded-[5px] w-full py-2 pl-10 pr-3 text-[#697587] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slanguage"></label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faLanguage} className="text-[#101D2E]" />
                  </span>
                  <input
                    type="text"
                    name="slanguage"
                    value={formData.slanguage}
                    onChange={handleChange}
                    placeholder="Source Language"
                    className="shadow appearance-none border rounded-[5px] w-full py-2 pl-10 pr-3 text-[#697587] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tlanguage"></label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faLanguage} className="text-[#101D2E]" />
                  </span>
                  <input
                    type="text"
                    name="tlanguage"
                    value={formData.tlanguage}
                    onChange={handleChange}
                    placeholder="To Language"
                    className="shadow appearance-none border rounded-[5px] w-full py-2 pl-10 pr-3 text-[#697587] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryoption"></label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faTruck} className="text-[#101D2E]" />
                  </span>
                  <input
                    type="text"
                    name="deliveryoption"
                    value={formData.deliveryoption}
                    onChange={handleChange}
                    placeholder="Delivery Option"
                    className="shadow appearance-none border rounded-[5px] w-full py-2 pl-10 pr-3 text-[#697587] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message"></label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faFile} className="text-[#101D2E]" />
                  </span>
                  <input
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="shadow appearance-none border rounded-[5px] w-full py-2 pl-10 pr-3 text-[#697587] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  type="submit"
                  className="bg-[#3D65FF] text-white rounded-[100px] px-[24px] py-[12px] w-[152px] text-[14px] font-medium focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        
      </div>
<div className='lg:w-[740px] md:w-[740px] w-[340px] lg:mt-[100px] lg:ml-[180px] md:ml-[50px] ml-6 grid gap-[24px]'>
    <h1 className='text-[#101D2E] text-[36px] font-medium'>超过80种语言的商务，电子商务，技术和个人翻译服务</h1>
    <h1 className='text-[#697587] text-[16px] font-normal'>Letter Crafts，我们知道生活和业务中可能充满无穷的挑战性，尤其是在诸如新加坡这样的多元文化枢纽中。这就是为什么我们提供了高达80多种语言的快速，优质和高效的翻译服务的原因。因此，无论您是想在新加坡工作和生活，还是想在新加坡开展业务，我们都可以满足您的商务翻译需求。当您搬到新加坡居住时，通常您需要把个人文件翻译成英文，Letter Crafts也能够为您提供这方面的帮助。最后，您可能希望将业务扩展到其他国家，例如中国。再一次，无论是基于电子商务的业务，技术业务还是传统业务，Letter Crafts都可以为您翻译所有业务和营销文件。为您提供高达80多种不同语言的快捷优质服务。</h1>
    <button className='text-[14px] bg-[#3D65FF] px-4 py-3 rounded-[100px] w-[232px] text-white font-medium'>Get a Quote in 30mins →</button>
</div>
<div className='lg:h-[793px] md:h-[580px] h-[380px] lg:mt-[120px] md:mt-[50px] mt-[40px] '>
  <img className='lg:h-[793px] md:h-[580px] h-[380px] w-screen ' src={bluewavebg} alt='M'/>
  <div className='lg:mt-[-640px] lg:ml-[180px] md:mt-[-530px] md:ml-[0px] mt-[-430px] ml-[-100px] lg:scale-100 md:scale-90 scale-50'>
  <h1 className='text-[36px] font-medium text-white w-[360px]'>Samples of certified translations</h1><br/>
        <Slider4/>
    </div>
  </div>
 <div><Whyletter/></div>
<div className='lg:h-[1013px] md:h-[620px] h-[420px] lg:mt-[120px] md:mt-[50px] mt-[-180px] '>
  <img className='lg:h-[1013px] md:h-[620px] h-[420px] w-screen ' src={bluewavebg} alt='M'/>
  <div className='lg:mt-[-1020px] md:mt-[-690px] mt-[-590px]'>
  <Workwithus textColor1="#FFFFFF" textcolor2="#FFFFFF" />
  </div>
  </div>
  <div className='lg:mt-[1000px] md:mt-[750px] mt-[50px] h-[0px]'>
  <Tprocess 
  showBackground={false} 
  headingColor='black' 
  dottedlineSrc={blackDottedline} 
/>
  </div>
  <div className='lg:h-[697px] md:h-[620px] h-[1000px] lg:mt-[-50px] md:mt-[-100px] mt-[880px] '>
  <img className='lg:h-[697px] md:h-[620px] h-[1000px] w-screen ' src={bluewavebg} alt='M'/>
  <div className='lg:mt-[-540px] md:mt-[-570px] mt-[-890px] grid justify-center lg:gap-[80px] md:gap-[0px] gap-[0px]'>
  <h1 className='text-white text-[36px] font-medium text-center'>Why LetterCrafts?</h1>
  <div className='grid lg:grid-cols-3 md:grid-cols-2  lg:w-[1160px] md:w-[800px] gap-[20px] justify-center lg:scale-100 md:scale-75 scale-[80%]'> {/*cards*/}
<div className='w-[373px] h-[260px] flex flex-col items-center justify-center bg-white rounded-[16px]'>
<FontAwesomeIcon icon={faTag} className='text-[#3D65FF] h-[35px] w-[35px]' />
<h1 className='text-[#101D2E] text-[24px] font-medium'>Best Rates</h1><br/>
<h1 className='text-[#697587] text-[16px] font-normal w-[250px] text-justify'>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</h1>
</div>
<div className='w-[373px] h-[260px] flex flex-col items-center justify-center bg-white rounded-[16px]'>
<FontAwesomeIcon icon={faStar} className='text-[#3D65FF] h-[35px] w-[35px]' />
<h1 className='text-[#101D2E] text-[24px] font-medium'>High Quality</h1><br/>
<h1 className='text-[#697587] text-[16px] font-normal w-[250px] text-justify'>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</h1>
</div>
<div className='w-[373px] h-[260px] flex flex-col items-center justify-center bg-white rounded-[16px]'>
<FontAwesomeIcon icon={faGaugeHigh} className='text-[#3D65FF] h-[35px] w-[35px]' />
<h1 className='text-[#101D2E] text-[24px] font-medium'>Speed</h1><br/>
<h1 className='text-[#697587] text-[16px] font-normal w-[250px] text-justify'>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</h1>
</div>
  </div>
  </div>
  </div>
 <Frequent/>
      </div>
  )
}

export default Language