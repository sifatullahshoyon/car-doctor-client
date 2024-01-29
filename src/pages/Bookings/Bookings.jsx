import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(bookings)
      });
  }, []);

  const handleDelete = (_id) => {
    const proceed = confirm('Are You Sure want to delete');
    if(proceed){
        fetch(`http://localhost:5000/bookings/${_id}` , {
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
                const remaining = bookings?.filter(booking => booking._id !== _id);
                setBookings(remaining);
            }
        })
    }

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
                <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;