import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import DefineGetSetAffirmationsArray from './DefineGetSetAffirmationsArray';


const DisplayAffirmations = () => {
    
    // define, get, and set data
    let affirmationsArray = DefineGetSetAffirmationsArray();
    console.log('affirmationsArray: ');
    console.log(affirmationsArray);
    console.log(typeof affirmationsArray);

    // object of affirmation groups
    let affirmationGroupsObject = affirmationsArray[0].groups;
    console.log('affirmationGroupsObject: ');
    console.log(affirmationGroupsObject);
    console.log(typeof affirmationGroupsObject);

    let groupKey;
    Object.entries(affirmationGroupsObject).forEach(entry => {
        const [key, value] = entry;
        console.log('key: ' + key);
        console.log('value: ' + value.group);
        if (value.group === "Default Affirmations") {
            groupKey = key;
        } 
    });
    console.log(groupKey);
    let currentGroupAffirmations = affirmationGroupsObject[groupKey].affirmations;
    console.log(currentGroupAffirmations);
    
    // You can now grab specific affirmation groups in the array
    // Figure out how to display that you have different groups to choose from


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
                    {currentGroupAffirmations.map(
                        (
                            { affirmation, duration, order, uuid },
                            index
                        ) => {
                            return (
                                <SplideSlide id={index} key={uuid} order={order} data-splide-interval={duration}>
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