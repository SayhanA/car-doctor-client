import React from 'react';
import HeadBanner from '../HeadBanner/HeadBanner';
import ServiecsDetails from '../ServicesDetails/ServiecsDetails';
import RightBar from '../RightBar/RightBar';


const Services = () => {
    const text = {
        text: "Service Details",
        page: "Services Details"
    }

    return (
        <div >
            <HeadBanner text={text} />
                <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }} className='w-full'>

                    <div style={{ width: "" }} className='rounded-xl '>
                        <ServiecsDetails />
                    </div>

                    <div className=''>
                        <RightBar />
                    </div>
                </div>
        </div>
    );
};

export default Services;