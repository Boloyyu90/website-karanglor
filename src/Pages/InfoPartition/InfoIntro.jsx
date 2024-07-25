import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../../assets/images/DSC01491.png';
import Image2 from '../../assets/images/DSC01492.png';
import Image3 from '../../assets/images/DSC01497.png';
import Image4 from '../../assets/images/DSC01503.png';

const Intro = () => {
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
    <div className="relative overflow-hidden h-[15rem]"> {/* Adjusted height */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative"> {/* Adjusted height */}
            <LazyLoadImage
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center p-6 mx-auto"> {/* Adjusted class for centering */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-white text-center"
        >
          <h3 className="text-3xl md:text-4xlxl lg:text-6xl font-bold">Informasi & Berita</h3>
          <p className="text-md md:text-lg lg:text-xl max-w-2xl font-thin">ꦌꦣꦸꦏꦱꦶ</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
