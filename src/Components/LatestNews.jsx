import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
           <p className='text-base-100 bg-secondary px-3 py-2 font-bold'>Latest</p>
           <Marquee className='flex gap-5'pauseOnHover={true} speed={60}><p>dvffghh Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ratione impedit reiciendis magnam earum dignissimos velit. Corrupti iure tenetur inventore nobis libero dicta sapiente consequatur ad necessitatibus incidunt, repellat veritatis?</p></Marquee>
           
        </div>
    );
};

export default LatestNews;