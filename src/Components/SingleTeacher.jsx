import React from 'react';

const SingleTeacher = ({teacher}) => {
    const {thumbnail}=teacher
    
    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64" src={thumbnail} alt="Article"/>
    
        <div className="p-6">
            <div>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Feature</span>
                <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
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
