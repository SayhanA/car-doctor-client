import React from 'react';
import img from "../../../assets/images/checkout/checkout.png"

const HeadBanner = ({text}) => {
    console.log(text)
    return (
        <div className='relative mb-20'>
            <div className="hero h-[350px] rounded-xl overflow-hidden" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60 flex items-center px-20"><h1 className="mb-5 text-5xl font-bold text-white">{text.text}</h1></div>
            </div>
            <div className='absolute bottom-0 h-[50px] w-[400px] left-[50%] translate-x-[-50%] flex justify-between'>
                <div style={{ borderRadius: "100%  0 0 0 " }} className=' w-[50px] h-[50px] bg-red-500'></div>
                <div className='flex-grow bg-red-500 flex font-bold text-white justify-center items-center'> Home | {text.page} </div>
                <div style={{ borderRadius: "0 100% 0 0" }} className=' w-[50px] h-[50px] bg-red-500'></div>
            </div>
        </div>
    );
};

export default HeadBanner;