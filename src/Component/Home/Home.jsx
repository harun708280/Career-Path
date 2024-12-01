import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Carosel from './Carosel';
import { PiUsersThreeFill } from "react-icons/pi";
import { FaClock, FaLaptop } from "react-icons/fa6";
import Service from './Service';

import { useLoaderData } from 'react-router-dom';
import Difference from './Difference';
import Info from './Info';
import 'aos/dist/aos.css'; // Import AOS styles




import CountUp from 'react-countup';

const Home = () => {
    useEffect(()=>{
        document.title='Career Path || Home'

    },[])
    const loadData = useLoaderData();

    
    useEffect(() => {
        AOS.init({ duration: 1000,offset: 200 });
         
    }, []);

    return (
        <div className='w-11/12 mx-auto max-w-[1600px]  '>
            {/* Carousel Section */}
            <Carosel></Carosel>

            {/* Stats Section */}
            <Info></Info>

            {/* Service Section */}
           <div  className="">
             <Service key={loadData.id} data={loadData}></Service>
           </div>
           <div className="">
            <Difference></Difference>
           </div>
        </div>
    );
};

export default Home;
