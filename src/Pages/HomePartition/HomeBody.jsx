import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';


import Image1 from '../../assets/images/DSC01491.png';
import Image2 from '../../assets/images/DSC01492.png';
import Image3 from '../../assets/images/DSC01497.png';
import Image4 from '../../assets/images/DSC01503.png';
import Maps from '../../assets/images/Peta.png';

function Body() {
  const [activeTab, setActiveTab] = useState('tourism');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
    setIsHeaderVisible(false);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setIsHeaderVisible(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Image1, Image2, Image3, Image4];

  return (
    <>
      {isHeaderVisible && (
        <div className='text-black m-5 p-2 border rounded-md bg-white bg-opacity-80'>
          <h1 className='text-2xl font-bold'>Selamat Datang di Dusun Karanglor</h1>
          <p className='text-sm font-light mt-2'>
            Karang Lor bukan hanya sekedar tempat tinggal, tetapi juga rumah bagi hati yang saling berbagi dalam semangat gotong royong. Kami percaya bahwa kebahagiaan sejati muncul dari kebersamaan, di mana setiap warga saling mendukung dan membantu satu sama lain.
          </p>
          <h1 className='text-2xl font-bold mt-8'>Sekilas Mengenai Karanglor</h1>
          <p className='text-sm font-light mt-2'>
            Dusun Karanglor terletak di Desa Jepitu, Kecamatan Girisubo, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta. Dusun Karanglor adalah dusun yang memiliki potensi yang cukup besar. Dengan kerjasama antar warga yang baik, dusun ini diharapkan dapat terus berkembang dan meningkatkan taraf hidup masyarakatnya.
          </p>
          
          <div className='p-3'>
            <img src={Maps} alt="" onClick={handleImageClick} />
            <p className='my-2 ms-2 text-xs font-thin text-[#7DA148]'>Klik gambar untuk details</p>
          </div>

          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'tourism' ? 'border-[#7DA148] text-[#7DA148]' : 'border-transparent text-[#7DA148] hover:text-[#7DA148] hover:border-gray-200'}`}
                  id="tourism-tab"
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick('tourism')}
                  aria-controls="tourism"
                  aria-selected={activeTab === 'tourism'}
                >
                  Pariwisata
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'micro-enterprise' ? 'border-[#7DA148] text-[#7DA148]' : 'border-transparent text-[#7DA148] hover:text-[#7DA148] hover:border-gray-200'}`}
                  id="micro-enterprise-tab"
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick('micro-enterprise')}
                  aria-controls="micro-enterprise"
                  aria-selected={activeTab === 'micro-enterprise'}
                >
                  UMKM
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'culture' ? 'border-[#7DA148] text-[#7DA148]' : 'border-transparent text-[#7DA148] hover:text-[#7DA148] hover:border-gray-200'}`}
                  id="culture-tab"
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick('culture')}
                  aria-controls="culture"
                  aria-selected={activeTab === 'culture'}
                >
                  Kebudayaan
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'contacts' ? 'border-[#7DA148] text-[#7DA148]' : 'border-transparent text-[#7DA148] hover:text-[#7DA148] hover:border-gray-200'}`}
                  id="contacts-tab"
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick('contacts')}
                  aria-controls="contacts"
                  aria-selected={activeTab === 'contacts'}
                >
                  
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-white ${activeTab === 'tourism' ? '' : 'hidden'}`} id="tourism" role="tabpanel" aria-labelledby="tourism-tab">
              <p className="text-sm textblack">This is some placeholder content.</p>
            </div>
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-white ${activeTab === 'micro-enterprise' ? '' : 'hidden'}`} id="micro-enterprise" role="tabpanel" aria-labelledby="micro-enterprise-tab">
              <p className="text-sm textblack">This is some placeholder content.</p>
            </div>
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-white ${activeTab === 'culture' ? '' : 'hidden'}`} id="culture" role="tabpanel" aria-labelledby="culture-tab">
              <p className="text-sm textblack">This is some placeholder content.</p>
            </div>
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-white ${activeTab === 'contacts' ? '' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <p className="text-sm textblack">This is some placeholder content.</p>
            </div>
          </div>
        </div>
      )}

      <div className='relative'>
        <div className="overflow-hidden h-[20rem]"> {/* Adjusted height */}
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative h-[20rem]"> {/* Adjusted height */}
                <LazyLoadImage
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
          <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center p-10 text-xl font-bold">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-white text-center"
            >
              <h1>Mari kenali lebih dalam tentang Dusun Karanglor, di mana kesederhanaan menjadi kekuatan, dan kebahagiaan adalah milik semua.</h1>
            </motion.div>
          </div>
          
        </div>
      </div>
      <div className='justify-center my-10 m-10'>
        <h1 className='flex justify-center font-bold text-2xl my-5'>DETAIL LOKASI</h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4208.628831995166!2d110.71234053446065!3d-8.148528756483655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc7dc08348e55%3A0x103a8fa8403692f6!2sBalai%20Padukuhan%20Karanglor!5e0!3m2!1sid!2sid!4v1721350570475!5m2!1sid!2sid"
                  className="w-full h-96 border rounded-md"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseFullscreen}
        >
          <img src={Maps} alt="Full screen" className="max-w-full max-h-full" />
        </div>
      )}
    </>
  );
}

export default Body;
