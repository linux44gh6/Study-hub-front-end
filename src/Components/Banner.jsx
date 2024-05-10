import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../CustomCss/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <div className='h-[86vh]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slide1'>
            <div className='flex flex-col justify-start lg:-translate-x-64 lg:w-1/2 space-y-2'>
            <h1 className=' text-left lg:text-7xl text-white font-lato'>Discover the Power of Community Learning</h1>
            <p className=' text-left text-white'>Showcase the benefits of community-based learning in fostering a supportive and enriching academic environment</p>
            <div className='flex translate-x-2 lg:translate-x-0 gap-2'>
            <button className=' uppercase px-1 lg:px-3 py-3 rounded bg-[#2164f3] text-white'>get started now</button>
            <button className=' hover:bg-base-200 hover:text-black transition uppercase px-2 lg:px-10 text-white py-3 rounded border border-white '>Take a tour</button>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide className='slide2'>
            <div className='flex flex-col justify-start lg:-translate-x-64 lg:w-1/2 space-y-2'>
            <h1 className=' text-left lg:text-7xl text-white font-lato text-2xl'>Where Learning Comes Alive: Step into Our Vibrant</h1>
            <p className=' text-left text-white'>Showcase the benefits of community-based learning in fostering a supportive and enriching academic environment</p>
            <div className='flex translate-x-2 lg:translate-x-0 gap-2'>
            <button className=' uppercase px-2 lg:px-3 py-3 rounded bg-[#2164f3] text-white'>get started now</button>
            <button className=' hover:bg-base-200 hover:text-black transition uppercase px-1 lg:px-10 text-white py-3 rounded border border-white '>Take a tour</button>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide className='slide3'>
            <div className='flex flex-col justify-start lg:-translate-x-64 lg:w-1/2 space-y-2'>
            <h1 className=' text-left text-2xl lg:text-7xl text-white font-lato'>Where Knowledge Meets Collaboration</h1>
            <p className=' text-left text-white'>Showcase the benefits of community-based learning in fostering a supportive and enriching academic environment</p>
            <div className='flex translate-x-4 gap-2'>
            <button className=' uppercase px-2 lg:px-3 py-3 rounded bg-[#2164f3] text-white'>get started now</button>
            <button className=' hover:bg-base-200 hover:text-black transition uppercase px-1 lg:px-10 text-white py-3 rounded border border-white '>Take a tour</button>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide className='slide4'>
            <div className='flex flex-col justify-start lg:-translate-x-64 lg:w-1/2 space-y-2'>
            <h1 className=' text-left lg:text-7xl text-white font-lato'>Discover the Power of Community Learning</h1>
            <p className=' text-left text-white'>Showcase the benefits of community-based learning in fostering a supportive and enriching academic environment</p>
            <div className='flex translate-x-2 lg:translate-x-0 gap-2'>
            <button className=' uppercase px-1 lg:px-3 py-3 rounded bg-[#2164f3] text-white'>get started now</button>
            <button className=' hover:bg-base-200 hover:text-black transition uppercase px-1 lg:px-10 text-white py-3 rounded border border-white '>Take a tour</button>
            </div>
            </div>
            </SwiperSlide>
      </Swiper>
    </div>
  );
}
