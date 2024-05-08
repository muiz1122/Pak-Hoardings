import React from 'react';
import { RiAdvertisementFill } from "react-icons/ri";
import { MdMobileFriendly } from "react-icons/md";
import { PiFlagBannerBold } from "react-icons/pi";
import { PiWallThin } from "react-icons/pi";
import { FaDigitalTachograph } from "react-icons/fa";
import { FaGaugeHigh } from "react-icons/fa6";
import { SiVbulletin } from "react-icons/si";

const Categories = () => {
    return (
        <>
            <div className="container mx-auto max-w-screen-xl font-abc">

                <h1 className="text-center pt-10 mb-12 font-semibold relative text-3xl">Categories
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 h-1 w-24"></div>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="service text-center p-6 rounded-md text-base cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105">
                        <PiFlagBannerBold className='fa-solid text-2xl mb-3 hover:text-white' />
                        <h2 className="font-semibold mb-2">Billboards</h2>
                        <p>Traditional large outdoor advertising structures for maximum visibility.</p>
                    </div>

                    <div className="service text-center p-6 rounded-md text-base cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105">
                        <MdMobileFriendly className='fa-solid text-2xl mb-3 hover:text-white' />
                        <h2 className="font-semibold mb-2">Mobile Billboards</h2>
                        <p> Advertisements on vehicles that move around targeted areas.</p>
                    </div>

                    <div className="service text-center p-6 rounded-md text-base cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105">
                        <PiFlagBannerBold className='fa-solid text-2xl mb-3 hover:text-white' />
                        <h2 className="font-semibold mb-2">Banners</h2>
                        <p>Versatile, customizable signage for various promotional purposes. </p>
                    </div>

                    <div className="service text-center p-6 rounded-md text-base cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105">
                        <PiWallThin className='fa-solid text-2xl mb-3 hover:text-white' />
                        <h2 className="font-semibold mb-2">Wallscapes</h2>
                        <p>Large-scale advertisements covering entire building facades. </p>
                    </div>

                    <div className="service text-center p-6 rounded-md text-base cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105">
                        <FaDigitalTachograph className='fa-solid text-2xl mb-3 hover:text-white' />
                        <h2 className="font-semibold mb-2">Dgital Billboards</h2>
                        <p> Dynamic, eye-catching displays with changing content.</p>
                    </div>

                    <div className="service text-center p-6 rounded-md text-base cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105">
                        <FaGaugeHigh className='fa-solid text-2xl mb-3 hover:text-white' />
                        <h2 className="font-semibold mb-2">Highway Signage</h2>
                        <p> Prominent signs along highways for directional or informational purposes.</p>
                    </div>

                    <div className="service text-center p-6 rounded-md text-base cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105">
                        <RiAdvertisementFill className="fa-solid text-2xl mb-3 hover:text-white" />
                        <h2 className="font-semibold mb-2">Advertising</h2>
                        <p>Broad category encompassing various forms of promotional communication.</p>
                    </div>

                    <div className="service text-center p-6 rounded-md text-base cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105">
                        <SiVbulletin className="fa-solid text-2xl mb-3 hover:text-white" />
                        <h2 className="font-semibold mb-2">Bulletins</h2>
                        <p>Large format static displays often located along major roadways for high impact.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Categories;
