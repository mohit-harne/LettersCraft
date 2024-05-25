import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import mailicon from '../assets/images/mailicon.png';
import callicon from '../assets/images/callicon.png';

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`w-full bg-[#101D2E] z-50 ${isSticky ? 'fixed top-0 bg-opacity-75 [text-shadow:_0_1px_1px_rgb(0_0_0_/_100%)]' : 'sticky bg-opacity-5 top-0'}`}>
      <nav className="container mx-auto h-20 flex justify-between items-center lg:px-[180px] px-[20px]">
        <Link to="/" className="w-[105px] h-[32px]"><img className='drop-shadow-md' src={logo} alt='M' /></Link>
        <div className="hidden lg:flex grid-flow-col items-center gap-[24px]">
          <CustomNavLink to="/" active={location.pathname === "/"} onClick={closeMenu}>Home</CustomNavLink>
          <CustomNavLink to="/about" active={location.pathname === "/about"} onClick={closeMenu}>About</CustomNavLink>
          <CustomNavLink to="/services" active={location.pathname === "/services"} onClick={closeMenu}>Services</CustomNavLink>
          <CustomNavLink to="/languages" active={location.pathname === "/languages"} onClick={closeMenu}>Languages</CustomNavLink>
          <CustomNavLink to="/epayments" active={location.pathname === "/epayments"} onClick={closeMenu}>ePayments</CustomNavLink>
          <CustomNavLink to="/blog" active={location.pathname === "/blog"} onClick={closeMenu}>Blog</CustomNavLink>
          <CustomNavLink to="/contact" active={location.pathname === "/contact"} onClick={closeMenu}>Contact</CustomNavLink>
          <div className='flex gap-[8px]'>
            <a href="mailto:info@lettercrafts.org" className="bg-[#3D65FF] text-white text-[14px] font-medium py-[8px] px-[16px] rounded-[100px]">
              <div className='flex justify-center items-center gap-[4px]'>
                <img className='h-[16px] w-[16px] mt-[1px]' src={mailicon} alt='M' />
                info@lettercrafts.org
              </div>
            </a>
            <a href="tel:+6567110135" className="bg-[#3D65FF] text-white text-[14px] font-medium py-[8px] px-[16px] rounded-[100px]">
              <div className='flex justify-center items-center gap-[4px]'>
                <img className='h-[16px] w-[16px] mt-[1px]' src={callicon} alt='M' />
                +65 67110135
              </div>
            </a>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-xl focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div className={`lg:hidden absolute top-[80px] left-0 right-0 bg-[#101D2E] z-50 transition-all duration-300 ${isMenuOpen ? 'bg-opacity-75' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center py-4 lg:gap-0 gap-4 justify-center">
          <CustomNavLink to="/" active={location.pathname === "/"} onClick={closeMenu}><h1 className='text-2xl font-bold'>Home</h1></CustomNavLink>
          <CustomNavLink to="/about" active={location.pathname === "/about"} onClick={closeMenu}><h1 className='text-2xl font-bold'>About</h1></CustomNavLink>
          <CustomNavLink to="/services" active={location.pathname === "/services"} onClick={closeMenu}><h1 className='text-2xl font-bold'>Services</h1></CustomNavLink>
          <CustomNavLink to="/languages" active={location.pathname === "/languages"} onClick={closeMenu}><h1 className='text-2xl font-bold'>Languages</h1></CustomNavLink>
          <CustomNavLink to="/epayments" active={location.pathname === "/epayments"} onClick={closeMenu}><h1 className='text-2xl font-bold'>ePayments</h1></CustomNavLink>
          <CustomNavLink to="/blog" active={location.pathname === "/blog"} onClick={closeMenu}><h1 className='text-2xl font-bold'>Blog</h1></CustomNavLink>
          <CustomNavLink to="/contact" active={location.pathname === "/contact"} onClick={closeMenu}><h1 className='text-2xl font-bold'>Contact</h1></CustomNavLink>
          <div className='flex gap-[8px]'>
            <a href="mailto:info@lettercrafts.org" className="bg-[#3D65FF] text-white text-[14px] font-medium py-[8px] px-[16px] rounded-[100px]">
              <div className='flex justify-center items-center gap-[4px]'>
                <img className='h-[16px] w-[16px] mt-[1px]' src={mailicon} alt='M' />
                info@lettercrafts.org
              </div>
            </a>
            <a href="tel:+6567110135" className="bg-[#3D65FF] text-white text-[14px] font-medium py-[8px] px-[16px] rounded-[100px]">
              <div className='flex justify-center items-center gap-[4px]'>
                <img className='h-[16px] w-[16px] mt-[1px]' src={callicon} alt='M' />
                +65 67110135
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomNavLink = ({ to, active, onClick, children }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `text-[14px] font-normal leading-[20.27px] ${isActive ? "text-gray-400" : "text-white"}`}
  >
    {children}
  </NavLink>
);

export default Navbar;
