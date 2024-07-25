import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import calendar from "../../assets/images/calendar.svg"

function Body() {

  return (
    <>
      <div>
        <div className='text-black m-5 p-2 border rounded-md bg-white bg-opacity-80'>
          <h1 className='text-2xl font-bold'>Pentingnya Pendidikan,</h1>
          <h1 className='text-2xl font-bold'>Demi Sumber Daya  Berkelanjutan</h1>
          <div className="py-2 md:w-15 lg:w-20 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center col-span-1 ">
              <img
                src={logoDesa}
                alt="Logo"
                className="object-contain w-5 mr-2"
              />
              <p className=''>Karanglor</p>
            </div>
            
            <div className="flex items-center col-span-1">
              <img
                src={calendar}
                alt="Calendar"
                className="w-5 mr-2"
              />
              <p>Senin, 22 Juli 2024</p>
            </div>
          </div>
          <p className='text-sm font-light mt-4'>
          Halo para pembaca sekalian! Pada kesempatan kali ini, Kelompok 13 KKN 85 UAJY ingin mengajak Kita semua untuk menjelajahi kisah di dalam Dusun Karanglor tercinta kita. Bersama-sama, kita akan membahas mengenai Pendidikan Dusun yang dimana Pendidikan merupakan juga hal mendasar pembangun bangsa, dan seperti kita tahu juga hal yang mendasar merupakan hal yang paling berdampak besar. Pada pembahasan kali ini yakni Pendidikan itu sendiri yang merupakan tumpuan dari sebuah Bangsa, dan kini dimulai dari tingkat Dusun. 
          </p>
          <p className='text-sm font-light mt-2'>
          Dusun, seringkali dianggap sebagai entitas perdesaan yang terpencil, sebenarnya adalah tempat di mana kekayaan potensial tersembunyi. Dalam hal ini, Karanglor menawarkan panorama potensi yang memikat, yang bisa menjadi fondasi bagi perkembangan berkelanjutan.
          Pendidikan di Dusun Karanglor tidak hanya bertujuan mencetak sumber daya yang berprestasi secara akademis, tetapi juga membentuk individu yang mampu berkontribusi positif bagi masyarakat. Dengan pendidikan yang baik, sumber daya manusia di dusun dapat meningkat kualitasnya, yang pada akhirnya akan berkontribusi pada kemajuan dusun itu sendiri.
          </p>
        </div>
      </div>
    </>
  );
}

export default Body;
