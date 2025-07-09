import { useState, useEffect } from 'react';
import { X, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import angularCertif from '../assets/img/certifications/Angular conv 1.png'
import bigDataCertif from '../assets/img/certifications/Big_Data_Engineer_Certificate_Badge20241220-26-z28tzq conv 1.png'
import iaCertif from '../assets/img/certifications/image.png'
import aspCertif from '../assets/img/certifications/Coursera WDHLGKRC5VV7 (1) conv 1.png'
import scrumCertif from '../assets/img/certifications/ScrumFundamentalsCertified-LinaBenMoussa-1004785 conv 1.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay  } from 'swiper/modules';

const Certifications = () => {

  // Images de démonstration - remplacez par vos vraies images
  const certifications = [
    {
      id: 1,
      name: "Angular",
      image: angularCertif,
    },
    {
      id: 2,
      name: "Artificial Intelligence",
      image: iaCertif,
    },
    {
      id: 3,
      name: "Big Data Engineer Certificate",
      image: bigDataCertif,
    },
    {
      id: 4,
      name: "ASP.NET Core",
      image: aspCertif,
    },
    {
      id: 5,
      name: "Scrum Fundamentals Certified",
      image: scrumCertif,
    },
  ];

  
  return (
    <>
    <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              My Certifications
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Here are some of the certifications I have acquired over the years.
          </p>
        </div>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="h-96 w-96 md:h-4/6 md:w-3/6"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

      >
        {certifications.map((cert) => (
          <SwiperSlide key={cert.id}>
            <img src={cert.image} alt={cert.name} />
          </SwiperSlide>
        ))}
        
      </Swiper>
      </>
  );
};

export default Certifications;