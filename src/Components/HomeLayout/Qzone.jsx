import React from 'react';
import swimmingimage from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImage from "../../assets/playground.png";
import bgImg from "../../assets/bg.png";
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-5'>
            <img src={swimmingimage} alt="" />
            <img src={classImg} alt="" />
            <img src={playImage} alt="" />
            <img src={bgImg} alt="" />
            </div>
            
        </div>
    );
};

export default Qzone;