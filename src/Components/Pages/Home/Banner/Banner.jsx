import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from "../../../../assets/banner/banner1.png";
import bannerImg2 from "../../../../assets/banner/banner2.png";
import bannerImg3 from "../../../../assets/banner/banner3.png";
import { MdArrowOutward } from 'react-icons/md';

const Banner = () => {

    const bannerBtn = <>
    <div className="absolute bottom-0 lg:bottom-8 xl:bottom-12 2xl:bottom-16 lg:left-16 xl:left-20 2xl:left-24  mb-5 gap-3 hidden lg:flex">
                        <button className='btn btn-primary bg-primary text-black-primary rounded-full'>
                        Track Your Parcel
                        </button>

                        <button className="flex justify-center items-center bg-black-primary rounded-full h-10 w-10">
                        <MdArrowOutward size={24} className="text-primary" />
                        </button>

                        <button className='btn btn-outline outline-dark-gray bg-[#fdfef9] rounded-[10px] hover:bg-black-primary hover:text-white'>
                        Be A Rider
                        </button>
                    </div>
    </>;

    return (
        <>
        <Carousel
        className='max-w-rw w-[95%] mx-auto my-6 lg:my-10'
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        stopOnHover={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        emulateTouch={true}

        >
                <div className="relative w-full select-none">
                    <img src={bannerImg1} className="w-full h-auto" />
                    {bannerBtn}
                </div>

                <div className='relative w-full select-none'>
                    <img src={bannerImg2} className='w-full h-auto'/>
                    {bannerBtn}
                </div>
                <div className='relative w-full select-none'>
                    <img src={bannerImg3} className='w-full h-auto'/>
                    {bannerBtn}
                </div>
            </Carousel>

            <div className='relative flex lg:hidden justify-center gap-1.5'>
                        <button className='btn btn-primary bg-primary outline-none border-none text-black-primary rounded-full shadow-none'>Track Your Parcel</button>
                        <button className="flex justify-center items-center bg-black-primary rounded-full h-10 w-10">
                            <MdArrowOutward size={24} className="text-primary" />
                        </button>
                        <button className='btn btn-outline rounded-[10px] hover:bg-black hover:text-white'>Be A Rider</button>
                     </div>
            </>

    );
};

export default Banner;