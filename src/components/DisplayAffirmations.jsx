import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import DefineGetSetAffirmationsArray from './DefineGetSetAffirmationsArray';


const DisplayAffirmations = () => {
    
    // define, get, and set data
    let affirmationsArray = DefineGetSetAffirmationsArray();

    return (
        <>
            <section className="home-slideshow w-80 position-absolute top-50 start-50 translate-middle">
                <Splide options=
                { 
                    {
                    pagination : false,
                    arrows : false,
                    type : 'fade',
                    rewind : true,
                    autoplay : true,
                    speed: 500,
                    width : '100vw',
                    interval: 4000,
                    } 
                } aria-label="My Affirmation Quotes">
                    {affirmationsArray.map(
                        (
                            { group, affirmation, duration, order, uuid},
                            index
                        ) => {
                            return (
                                <SplideSlide id={index} key={uuid} data-splide-interval={duration}>
                                    <p>{affirmation}</p>
                                </SplideSlide>
                            );
                        })}
                </Splide>
            </section>
        </>
    )
}
export default DisplayAffirmations;