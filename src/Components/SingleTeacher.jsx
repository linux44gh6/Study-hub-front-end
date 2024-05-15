import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const SingleTeacher = ({teacher}) => {
    const {thumbnail,title,description}=teacher
    
    return (
        <div data-aos="zoom-in"  data-aos-offset="" data-aos-duration="1000" data-aos-easing="ease-in-out" className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64 hover:scale-105 transition" src={thumbnail} alt="Article"/>
    
        <div className="lg:p-6">
            <div>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Feature</span>
                <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{title}</a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>
    
            <div className="mt-4">
                <div className="flex items-center">
                   
                </div>
            </div>
        </div>
    </div>
    );
}

export default SingleTeacher;
