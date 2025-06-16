import React from 'react';
import  Hero from './Hero';
import  HikeCard from './HIkeCard';
import './css/HikeCard.css';



const Home = () => {
    return (
        <div>
            <Hero/>
            <div className='hike-grid'>

            <HikeCard/>
            <HikeCard/>
            <HikeCard/>
            </div>



        </div>
    );
}

export default Home;
