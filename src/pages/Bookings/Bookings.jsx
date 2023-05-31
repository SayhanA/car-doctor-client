import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingsRow from './BookingsRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-access-token')} `
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{
                    navigate('/');
                }
            })
    }, [url, navigate])

    const handleDelete = id => {
        const process = confirm('Ary you Sure you want to delete')
        if(process){
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE",

            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    alert("Deleted Successfully");
                    const remaining = bookings.filter(bookings => bookings._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/booking/${id}`,{
            method: "PATCH",
            headers: {'content-type': 'Application/json'},
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id ===id);
                updated.status = "confirm"
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            <h3 className='text-4xl'>{bookings.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            bookings.map(data =><BookingsRow data={data} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} key={data._id}  /> )
                        }
                        

                        
                    </tbody>
                    {/* foot */}
                    

                </table>
            </div>
        </div>
    );
};

export default Bookings;