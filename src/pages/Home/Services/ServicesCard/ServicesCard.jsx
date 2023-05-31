import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, price, service_id, title } = service;

    return (
        <div className='p-3 border rounded-lg'>
            <img className='lg:h-[250px]  rounded-lg' src={img} alt="" />
            <div className='text-left py-3'>
                <h3 className='text-2xl font-bold py-1'>{title}</h3>
                <div className='text-[#FF3811] flex items-center justify-between'>
                    <p className='text-[#FF3811] font-bold text-xl py-1'>Price: {price} </p>
                    <Link to={`/checkout/${_id}`}><FaArrowRight className='mr-2 text-2xl font-light hover:text-4xl transition-all' /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;