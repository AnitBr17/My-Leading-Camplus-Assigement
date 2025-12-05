import React from 'react';
import phone from "../assets/phone.png";

const HereSection = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 mt-10'>
      
      {/* TEXT SECTION */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
          Financial infrastructure to grow your revenue
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-700 opacity-90">
          Join the millions of companies that use Stripe to accept payments online
          and in person, embed financial services, power custom revenue models,
          and build a more profitable business.
        </p>
      </div>

      {/* IMAGE SECTION */}
      <div className="flex justify-between lg:justify-end">
        <img 
          src={phone} 
          alt="Phone" 
          className="w-300 " 
          style={{ height: '510px' }} // fixed height for large phone look
        />
      </div>

    </div>
  );
}

export default HereSection;
