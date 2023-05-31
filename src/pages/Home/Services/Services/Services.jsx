import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log(services)

    return (
        <div className='text-center mt-10'>
            <h4 className='text-[#FF3811] font-bold text-xl'>Service</h4>
            <h2 className='font-bold text-[45px] mb-5'>Our Service Area</h2>
            <p className='mb-12 mx-auto w-[700px] text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;