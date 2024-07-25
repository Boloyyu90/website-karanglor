import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logoDesa from "../assets/images/logoDesaJepitu.png";
import Button from './Button'; // Import the Button component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a reference for the dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-2 left-0 right-0 grid w-full grid-cols-4 md:grid-cols-5 lg:grid-cols-6 h-10 md:h-30 lg:h-33 z-50">
        <div className="col-span-3 md:col-span-3 lg:col-span-4 grid grid-cols-6 md:grid-cols-6 lg:grid-cols-11 rounded-2xl bg-[#7DA148] drop-shadow-md">
          <div className="md:p-5 lg:p-5 col-span-5 md:col-span-3 lg:col-span-3 rounded-tr-full bg-white text-[#7DA148]">
            <div className="flex items-center m-3">
              <div className="pb-2 md:w-15 lg:w-20 object-contain">
                <img 
                  src={logoDesa}
                  alt="Logo" 
                  className='w-10'
                />
              </div>
              <div className="grid grid-rows-1 ms-3 md:ml-5 lg:ml-5">
                <a className="text-md md:text-lg lg:text-xl font-bold">
                  KARANGLOR
                </a>
                <a className="text-xs md:text-md lg:text-md font-light -mt-1">
                  Jepitu, Girisubo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 ms-auto my-auto relative">
          <Button 
            id="dropdownMenuIconButton"
            className="inline-flex items-center me-4 p-2 text-sm font-medium text-center text-white bg-[#7DA148] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#7DA148] dark:text-white dark:bg-[#7DA148]"
            hoverColor="#A7CA73"
            onClick={toggleDropdown}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
            </svg>
          </Button>
          <div 
            id="dropdownDots" 
            ref={dropdownRef} // Attach the ref to the dropdown
            className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white border border-[#7DA148] rounded-lg shadow w-40 absolute right-3 mt-5`}
          >
            <ul className="py-2 text-sm text-[#7DA148]" aria-labelledby="dropdownMenuIconButton">
              <li>
                <Link to="/" onClick={closeDropdown} className="px-4 py-3 bg-white hover:bg-[#7DA148] hover:text-white border-b border-[#7DA148] grid grid-rows-2">
                  <span className='flex justify-center'>Beranda</span>
                  <span className='flex justify-center'>ꦧꦼꦫꦤ꧀ꦝ</span>
                </Link>
              </li>
              <li>
                <Link to="/education" onClick={closeDropdown} className="px-4 py-3 bg-white hover:bg-[#7DA148] hover:text-white border-b border-[#7DA148] grid grid-rows-2">
                  <span className='flex justify-center'>Edukasi</span>
                  <span className='flex justify-center'>ꦌꦣꦸꦏꦱꦶ</span>
                </Link>
              </li>
              <li>
                <Link to="/health" onClick={closeDropdown} className="px-4 py-3 bg-white hover:bg-[#7DA148] hover:text-white border-b border-[#7DA148] grid grid-rows-2">
                  <span className='flex justify-center'>Kesehatan</span>
                  <span className='flex justify-center'>ꦏꦼꦱꦺꦲꦠꦤ꧀</span>
                </Link>
              </li>
              <li>
                <Link to="/microenterprise" onClick={closeDropdown} className="px-4 py-3 bg-white hover:bg-[#7DA148] hover:text-white border-b border-[#7DA148] grid grid-rows-2">
                  <span className='flex justify-center'>UMKM</span>
                  <span className='flex justify-center'>ꦈꦱꦲꦩꦶꦏꦿꦺꦴ</span>
                </Link>
              </li>
              <li>
                <Link to="/culture" onClick={closeDropdown} className="px-4 py-3 bg-white hover:bg-[#7DA148] hover:text-white border-b border-[#7DA148] grid grid-rows-2">
                  <span className='flex justify-center'>Kebudayaan</span>
                  <span className='flex justify-center'>ꦏꦼꦧꦸꦣꦪꦄꦤ꧀</span>
                </Link>
              </li>
              <li>
                <Link to="/tourism" onClick={closeDropdown} className="px-4 py-3 bg-white hover:bg-[#7DA148] hover:text-white border-b border-[#7DA148] grid grid-rows-2">
                  <span className='flex justify-center'>Pariwisata</span>
                  <span className='flex justify-center'>ꦥꦫꦶꦮꦶꦱꦠ</span>
                </Link>
              </li>
              <li>
                <Link to="/kkn-uajy" onClick={closeDropdown} className="px-4 mb-3 py-3 bg-white hover:bg-[#7DA148] border-b border-[#7DA148] hover:text-white grid grid-rows-2">
                  <span className='flex justify-center'>KKN UAJY</span>
                  <span className='flex justify-center'>ꦏꦸꦭꦶꦪꦃꦏꦼꦂꦗꦚꦠ</span>
                </Link>
              </li>
              <li>
                <Link to="/informasi" onClick={closeDropdown} className="px-4 mb-3 py-3 bg-white hover:bg-[#7DA148] hover:text-white grid grid-rows-2">
                  <span className='flex justify-center'>Informasi & Berita</span>
                  <span className='flex justify-center'>ꦧꦼꦫꦶꦠ</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
