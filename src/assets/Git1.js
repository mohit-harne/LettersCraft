import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUser, faEnvelope, faMobileAlt, faLanguage, faTruck, } from '@fortawesome/free-solid-svg-icons';

const Git1= ({  title="Get a quote" }) => {
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
    <div className='bg-white shadow-lg lg:ml-[842px] w-[550px] rounded-2xl md:ml-[320px] ml-[-80px] md:mt-[-350px] lg:mt-[-120px] mt-[-100px] lg:scale-100 md:scale-75 scale-[60%] py-4 grid justify-center '>
      <div className='lg:w-[420px] md:w-[420px] w-[430px] grid gap-[24px]'>
            <h1 className='text-[36px] font-medium'>{title}</h1>
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
  )
}

export default Git1