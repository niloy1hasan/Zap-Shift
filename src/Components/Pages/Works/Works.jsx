import React from 'react';
import deliveryVan from '../../../assets/bookingIcon.png';

const Works = () => {
    return (
        <section className='max-w-rw mx-auto w-[90%] font-urbanist'>
            <h1 className='font-extrabold text-3xl text-secondary'>How it Works</h1>

            <div className='grid grid-cols-1 gap-5 lg:grid-cols-4 my-8'>
                <div className='group bg-white p-8 rounded-2xl hover:bg-primary transition-all duration-400 hover:scale-106'>
                    <img src={deliveryVan} alt=""  className="transition-all duration-300 group-hover:grayscale group-hover:brightness-0"/>
                    <h3 className='font-bold text-secondary text-xl my-3 group-hover:text-black'>Booking Pick & Drop</h3>
                    <p className='text-dark-gray group-hover:text-black'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='group bg-white p-8 rounded-2xl hover:bg-primary transition-all duration-400 hover:scale-106'>
                    <img src={deliveryVan} alt=""  className="transition-all duration-300 group-hover:grayscale group-hover:brightness-0"/>
                    <h3 className='font-bold text-secondary text-xl my-3 group-hover:text-black'>Cash On Delivery</h3>
                    <p className='text-dark-gray group-hover:text-black'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='group bg-white p-8 rounded-2xl hover:bg-primary transition-all duration-400 hover:scale-106'>
                    <img src={deliveryVan} alt=""  className="transition-all duration-300 group-hover:grayscale group-hover:brightness-0"/>
                    <h3 className='font-bold text-secondary text-xl my-3 group-hover:text-black'>Delivery Hub</h3>
                    <p className='text-dark-gray group-hover:text-black'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='group bg-white p-8 rounded-2xl hover:bg-primary transition-all duration-400 hover:scale-106'>
                    <img src={deliveryVan} alt=""  className="transition-all duration-300 group-hover:grayscale group-hover:brightness-0"/>
                    <h3 className='font-bold text-secondary text-xl my-3 group-hover:text-black'>Booking SME & Corporate</h3>
                    <p className='text-dark-gray group-hover:text-black'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </section>
    );
};

export default Works;