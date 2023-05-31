import React from 'react';
import { FaPhoenixFramework } from 'react-icons/fa';


const BookingsRow = ({ data, handleDelete, handleBookingConfirm }) => {

    
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(data._id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded-xl w-[150px] h-[150px]">
                            <img src={data.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className="font-bold text-xl">{data.name}</div>
                        <div className=" opacity-50">Color: Green</div>
                        <div className=" opacity-50">Size: S</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="text-xl font-bold">{data.price}</span>
            </td>
            <td className='text-xl font-bold'>{data.date}</td>
            <th>
               {
                data.status ? <span className='text-xl font-bold'>Confirmed</span> :  <button onClick={ () => handleBookingConfirm(data._id)} className="btn bg-[#FF3811] border-0">Confirm</button>
               }
            </th>
        </tr>
    );
};

export default BookingsRow;