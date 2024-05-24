import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png';
import certifiedlogo from '../assets/images/certifiedlogo.png';
import smlogo1 from '../assets/images/socialmedialogos/smlogo1.png';
import smlogo2 from '../assets/images/socialmedialogos/smlogo2.png';
import smlogo3 from '../assets/images/socialmedialogos/smlogo3.png';
import smlogo4 from '../assets/images/socialmedialogos/smlogo4.png';

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,
  });

  const toggleMenu = (menu) => {
    setMenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Define array of texts for each main menu item
  const menuTexts = [
    'Enim maecenas facilisi amet amet duis. Natoque massa urna vitae nullam fermentum. Posuere dis.',
    'Ultricies consequat tellus luctus viverra bibendum morbi mattis vulputate. Eleifend dui enim.',
    'Amet diam aliquet eget posuere tincidunt. Sed nunc faucibus at pellentesque. Non tincidunt integer auctor feugiat in egestas in.',
    'Lectus sapien sem massa libero bibendum. Purus placerat arcu diam ultrices. Non aliquet quam arcu proin.',
    'In cursus tellus non etiam volutpat massa varius libero justo. Eu ultrices donec leo diam.',
    'Nunc convallis consectetur nulla sollicitudin elementum sagittis gravida quisque. Aliquam eu tristique id sed placerat vel rhoncus.'
  ];

  return (
    <footer className="bg-black text-white pt-4">
      <div className="container mx-auto flex md:grid-cols-3 gap-5 lg:gap-[220px] justify-center mt-[50px]">
        <div className="flex flex-col gap-11">
          <div>
            <img src={logo} alt="Logo" className="h-8 w-26" />
            <p className="text-sm font-medium w-56 mt-2">
              Elementum cras euismod sem in enim vel nunc nulla. At scelerisque tristique purus.
            </p>
            <div className="flex gap-4 mt-4">
              <img className="h-5 w-5" src={smlogo1} alt='Social Media' />
              <img className="h-5 w-5" src={smlogo2} alt='Social Media' />
              <img className="h-5 w-5" src={smlogo3} alt='Social Media' />
              <img className="h-5 w-5" src={smlogo4} alt='Social Media' />
            </div>
          </div>
          <img src={certifiedlogo} alt="Certified Logo" className="h-36 w-44" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 w-[700px]">
          {['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'].map((menu, index) => (
            <div className='lg:w-[150px]' key={index}>
              <div className="flex justify-between items-center ">
                <h2 className="text-lg font-bold">
                  {menu === 'menu1' ? 'Nam felis a' :
                    menu === 'menu2' ? 'Volutpat' :
                    menu === 'menu3' ? 'Adipiscing' :
                    menu === 'menu4' ? 'Sit ut vitae' :
                    menu === 'menu5' ? 'In libero enim' : 'Congue auctor'}
                </h2>
                <button
                  className="lg:hidden text-sm mt-2 underline"
                  onClick={() => toggleMenu(menu)}
                >
                  <FontAwesomeIcon icon={menuOpen[menu] ? faChevronUp : faChevronDown} />
                </button>
              </div>
              <p className={`mt-2 ${menuOpen[menu] ? 'block' : 'hidden'} lg:block`}>
                {menuTexts[index]}
              </p>
            </div>
          ))}
        </div>
      </div><br/>
      <div className='bg-[#697587] w-full flex justify-center items-center'>
  <h1 className='text-white text-[12px] font-medium py-2'>© 2023 All rights reserved</h1>
</div>
    </footer>
  );
}

export default Footer;
