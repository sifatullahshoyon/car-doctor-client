import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const url = `https://car-doctor-server-fsb7a2nc5-sifat-ullah-shoyons-projects.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url , {
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json',
        authorization : `Bearer ${localStorage.getItem('car-access-token')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookings(data);
        }
        else{
          // first logout & then navigate
          navigate('/');
        }
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm('Are You Sure want to delete');
    if(proceed){
        fetch(`https://car-doctor-server-fsb7a2nc5-sifat-ullah-shoyons-projects.vercel.app/bookings/${id}` , {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log(data)
                toast.success('Delete Successfully');
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        })
    }  

};

const handleBookingConfirm = (id) => {
    fetch(`https://car-doctor-server-fsb7a2nc5-sifat-ullah-shoyons-projects.vercel.app/bookings/${id}` , {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({status : 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            // updated status
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'confirm';
            const newBooking = [updated , ...remaining];
            setBookings(newBooking);
        }
    })
};

  return (
    <div className="container mx-auto px-10 py-5 my-32">
      <p>Booking : {bookings.length}</p>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-white text-xl bg-my-gray">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Img</th>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} ></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
