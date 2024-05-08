import { useEffect, useRef, useState } from 'react';
import { AiFillGift } from "react-icons/ai";
import { PiUsersThin } from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import ImageCounter from '../images/counter-back1.jpg';


function Contact() {
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [projectsCount, setProjectsCount] = useState(0);
    const [articlesCount, setArticlesCount] = useState(0);
    const [clientsCount, setClientsCount] = useState(0);
    const [meetingsCount, setMeetingsCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(contactRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const projectsInterval = setInterval(() => {
                setProjectsCount((prevCount) => {
                    if (prevCount < 75) {
                        return prevCount + 1;
                    } else {
                        clearInterval(projectsInterval);
                        return prevCount;
                    }
                });
            }, 50);

            const articlesInterval = setInterval(() => {
                setArticlesCount((prevCount) => {
                    if (prevCount < 160) {
                        return prevCount + 1;
                    } else {
                        clearInterval(articlesInterval);
                        return prevCount;
                    }
                });
            }, 20);

            const clientsInterval = setInterval(() => {
                setClientsCount((prevCount) => {
                    if (prevCount < 89) {
                        return prevCount + 1;
                    } else {
                        clearInterval(clientsInterval);
                        return prevCount;
                    }
                });
            }, 40);

            const meetingsInterval = setInterval(() => {
                setMeetingsCount((prevCount) => {
                    if (prevCount < 100) {
                        return prevCount + 1;
                    } else {
                        clearInterval(meetingsInterval);
                        return prevCount;
                    }
                });
            }, 30);
        }
    }, [isVisible]);

    return (
        <div
            className={` mt-0 ${isVisible ? 'animate-section' : ''}`}
            ref={contactRef}
        >
            <>

                <div className="relative">
                    <div className="absolute inset-0 bg-fixed bg-cover bg-center z-0" style={{ backgroundImage: `url(${ImageCounter})` }}>
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                    </div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <section className="flex flex-col mt-17 font-abc mb-17 text-white">
                            {/* <p className="font-semibold text-2xl md:text-3xl text-center">
                                    Our Outstanding Achievements
                                </p> */}

                            <div className="mt-12 mb-12 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
                                <div className="flex flex-col justify-center items-center px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px]  justify-self-center">
                                    <div className="flex flex-row justify-center items-center">
                                        <AiFillGift className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-blue-400' />
                                        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                                            {projectsCount}+
                                        </p>
                                    </div>
                                    <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                                        Published Ads
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px]  justify-self-center">
                                    <div className="flex flex-row justify-center items-center">
                                        <PiUsersThin className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-blue-400' />
                                        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                                            {articlesCount}+
                                        </p>
                                    </div>
                                    <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                                        Registered Users
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px]  justify-self-center">
                                    <div className="flex flex-row justify-center items-center">
                                        <MdOutlineVerifiedUser className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-blue-400' />
                                        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                                            {clientsCount}+
                                        </p>
                                    </div>
                                    <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                                        Verified Users
                                    </p>
                                </div>

                                <div className="flex flex-col justify-center items-center px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px]  justify-self-center">
                                    <div className="flex flex-row justify-center items-center">
                                        <GoProjectRoadmap className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-blue-400' />
                                        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                                            {meetingsCount}+
                                        </p>
                                    </div>
                                    <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                                        Projects
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>


































            </>
        </div>
    );
}

export default Contact;
