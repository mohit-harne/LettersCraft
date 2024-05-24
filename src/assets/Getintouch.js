import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import bluehalfwave from '../assets/images/bluehalfwave.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUser, faEnvelope, faMobileAlt, faLanguage, faTruck } from '@fortawesome/free-solid-svg-icons';
import gt1 from '../assets/images/getintouchicons/gt1.png';
import gt2 from '../assets/images/getintouchicons/gt2.png';
import gt3 from '../assets/images/getintouchicons/gt3.png';

const Getintouch = () => {
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
    <div className='lg:mt-[100px] md:mt-[0px] mt-[-130px] lg:h-[909px] md:h-[600px] w-screen text-white'>
      <img className='lg:h-[909px] md:h-[600px] h-[500px] w-screen' src={bluehalfwave} alt='M'/>
      <div className='lg:mt-[-700px] md:mt-[-600px] mt-[-570px] grid grid-flow-col justify-center lg:gap-[200px] md:gap-[50px] gap-[50px] lg:scale-100 md:scale-75 scale-[60%]'>
        <div className='grid gap-[32px] pl-2'>
          <div className='lg:w-[420px] md:w-[420px] w-[230px] grid gap-[24px]'>
            <h1 className='text-[36px] font-medium'>Get in touch</h1>
            <h1 className='text-[16px] font-normal'>Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo vel. Nec viverra commodo at convallis faucibus amet. Aliquam a id aliquam pulvinar neque.</h1>
          </div>
          <div className='lg:w-[472px] md:w-[472px] w-[230px]'>
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
        <div className='lg:w-[510px] md:w-[510px] w-[360px] mt-[20px]'> {/*right*/}
          <div className='text-white  grid gap-10'>
            <h1 className='text-[28px] font-medium '>Tortor in ut nisi magna</h1>
            <h1 className='text-[16px] font-normal'>Eget dui varius semper vel viverra. Rhoncus felis tristique nisl eget ultricies semper vitae. Turpis porta maecenas quis felis tempus sed nisl risus sit. Nam viverra lobortis arcu justo netus quis fringilla sed lacus.</h1>
          </div>
          <div className=' mt-[70px] grid gap-[80px]'> {/*cards*/}
          <div className='grid grid-flow-col gap-[20px]'>
<div className='text-white grid gap-4'>
  <img className='h-[36px] w-[36px]' src={gt1} alt='M'/>
  <h1 className='text-[16px] font-medium'>Certified translation and notarisation</h1>
</div>
<div className='text-white grid gap-4'>
  <img className='h-[36px] w-[36px]' src={gt2} alt='M'/>
  <h1 className='text-[16px] font-medium'>Business document translation</h1>
</div>
<div className='text-white grid gap-4'>
  <img className='h-[36px] w-[36px]' src={gt3} alt='M'/>
  <h1 className='text-[16px] font-medium'>Personal document translation</h1>
</div>
</div>
<div className='grid grid-flow-col gap-[20px]'>
<div className='text-white grid gap-4'>
  <img className='h-[36px] w-[36px]' src={gt1} alt='M'/>
  <h1 className='text-[16px] font-medium'>Certified translation and notarisation</h1>
</div>
<div className='text-white grid gap-4'>
  <img className='h-[36px] w-[36px]' src={gt2} alt='M'/>
  <h1 className='text-[16px] font-medium'>Business document translation</h1>
</div>
<div className='text-white grid gap-4'>
  <img className='h-[36px] w-[36px]' src={gt3} alt='M'/>
  <h1 className='text-[16px] font-medium'>Personal document translation</h1>
</div>
</div>

          </div>
        </div> 
      </div>
    </div>
  );
};

export default Getintouch;
