import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {_id , price , img , title} = service;
    return (
        <div>
            <div className="card card-compact h-[348px] bg-white shadow-xl p-6">
  <figure><img src={img ? img : 'Img Not Found'} alt="Service Img" className='object-cover rounded' /></figure>
  <div className="card-body">
    <h2 className="card-title text-black font-bold text-2xl">{title ? title: 'Data Not Found'}</h2>
    <div className='flex items-center text-my-orange pl-0 ml-0'>
        <p className='text-xl font-semibold'>Price : ${price ? price: 'Data Not Found'}</p>
        <FaArrowRight />
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;