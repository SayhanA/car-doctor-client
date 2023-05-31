import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import HeadBanner from '../Services/HeadBanner/HeadBanner';

const Checkout = () => {
    const loader = useLoaderData();
    const { user } = useContext(AuthContext);

    const { _id, title, price, img } = loader;
    // const { email, displayName, phoneNumber } = user;


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const date = form.date.value;
        const photo = form.photo.value;
        const message = form.message.value;
        const order = {
            name: firstName,
            email,
            phone,
            service: title,
            service_id: _id,
            price,
            date,
            photo,
            message
        }
        console.log(order)

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const text = {
        text: "Booking Form",
        page: "Book Now"
    }

    return (
        <div>
            <HeadBanner text={text} />
            <div className='w-full p-24 bg-[#F3F3F3]  rounded-lg'>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                            <input className="h-[60px] rounded-lg appearance-none block w-full  text-gray-700 border py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white" type="text" name='firstName' defaultValue={user?.displayName} placeholder="First Name" />
                            <input className="h-[60px] rounded-lg appearance-none block w-full  text-gray-700 border py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white" type="text" name='phone' placeholder="Your Phone" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">

                            <input className="h-[60px] rounded-lg appearance-none block w-full  text-gray-700 border py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white" type="email" name='email' defaultValue={user?.email} placeholder="Your Email" />
                            <input className="h-[60px] rounded-lg appearance-none block w-full  text-gray-700 border py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white" type="text" name='price' defaultValue={'$' + price} placeholder="Due Amount" />
                        </div>
                        <div className="w-full px-3 flex gap-6">

                            <input className="h-[60px] rounded-lg appearance-none block w-full  text-gray-700 border py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white" type="date" name='date' placeholder="Booking Data" />
                            <input className="h-[60px] rounded-lg appearance-none block w-full  text-gray-700 border py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white" type="text" name='photo' defaultValue={img} placeholder="Your Photo" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <textarea className="rounded-lg appearance-none block w-full  text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows={10} name='message' placeholder="Your Message" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <button className='btn w-full bg-[#FF3811] border-0 normal-case text-lg h-[60px]'>Order Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;