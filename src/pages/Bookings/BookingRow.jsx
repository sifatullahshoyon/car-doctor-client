import React from "react";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, email, title, img, first, last, status } = booking;

  return (
    <>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 h-12">
                {img && <img src={img ? img : "no img"} alt="" />}
              </div>
            </div>
            <div></div>
          </div>
        </td>
        <td>
          {title}
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>
          {first} {last}
        </td>
        <th>
          {status === "confirm" ? (
            <span className="font-bold text-success">Confirmed</span>
          ) : (
            <button
              onClick={() => handleBookingConfirm(_id)}
              className="btn btn-ghost btn-xs bg-my-orange border-0 hover:bg-my-orange"
            >
              Pending
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
