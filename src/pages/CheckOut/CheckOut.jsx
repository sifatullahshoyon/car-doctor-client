import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";

const CheckOut = () => {
  const checkouts = useLoaderData();
  const { _id, title, img } = checkouts;
  const { user } = useContext(AuthContext);
  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const first = form.first.value;
    const last = form.last.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      _id,
      title,
      img,
      first,
      last,
      phone,
      email,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            toast.success("Booking Successfully");
        }
        form.reset();
      });
  };
  return (
    <div className="container mx-auto bg-secondary my-32 px-10 rounded py-10">
      <p className="text-black py-5 text-3xl text-center font-bold">
        CheckOut : {title}
      </p>

      <form onSubmit={handleCheckOut} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              name="first"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last Name"
              name="last"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              placeholder="Your Phone"
              defaultValue={user?.phoneNumber}
              name="phone"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered bg-white"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered textarea-lg w-full bg-white"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="bg-my-orange btn border-0 hover:bg-my-orange text-white text-lg tracking-wide"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
