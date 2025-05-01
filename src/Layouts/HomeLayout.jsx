import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
           <header>
            <Header></Header>
            <LatestNews></LatestNews>
            
           </header> 
           <main>
            <section className='left_nav'></section>
            <section className='main'>
                <Outlet></Outlet>
            </section>
            <section className='right_nav'></section>
           </main>
        </div>
    );
};

export default HomeLayout;