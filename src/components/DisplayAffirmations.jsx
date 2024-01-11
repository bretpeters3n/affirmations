// import { useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import AffirmationDataSetup from './AffirmationDataSetup';
import DefineGetSetAffirmationsArray from "./DefineGetSetAffirmationsArray";

const DisplayAffirmations = () => {
  // define, get, and set data
  let affirmationsArray = DefineGetSetAffirmationsArray();

  // object of affirmation groups
  let affirmationGroupsObject = affirmationsArray[0].groups;

  // define var for key of affirmation group we are attempting to display
  let groupKey;
  // assign the wanted key to the var
  Object.entries(affirmationGroupsObject).forEach((entry) => {
    const [key, value] = entry;
    if (value.group === "Default Affirmations") {
      groupKey = key;
    }
  });

  // assign var with array of affirmations we are attempting to display
  let currentGroupAffirmations = affirmationGroupsObject[groupKey].affirmations;

  // PSEUDO CODE (DisplayAffirmations.jsx)
  // move 'Default Affirmations' into var and update that var when changing groups
  // FUTURE (if needed): pair that var with a unique key so when sharing lists they can have the same name

  // PSEUDO CODE (DefaultAffirmations.jsx)
  // Format rest of JSON file

  // PSEUDO CODE (CurrentAffirmations.jsx)
  // PSEUDO CODE (EditAffirmations.jsx)
  // PSEUDO CODE (AddAffirmations.jsx)
  // Write code to get new structure functional again
  // Look for ways to place this new structre into a separate file for use by all pages needing it

  // Design out Current Affirmations page new look with groups added

  // NOTES
  // You can now grab specific affirmation groups in the array
  // Figure out how to display that you have different groups to choose from

  return (
    <>
      <section className="home-slideshow w-80 position-absolute top-50 start-50 translate-middle">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <p>Sentence #1</p>
          </SplideSlide>
          <SplideSlide>
            <p>Sentence number 2</p>
          </SplideSlide>
        </Splide>
        {/* <Splide
          options={{
            pagination: false,
            arrows: false,
            type: "fade",
            rewind: true,
            autoplay: true,
            speed: 500,
            width: "100vw",
            interval: 4000,
          }}
          aria-label="My Affirmation Quotes"
        >
          {currentGroupAffirmations.map(
            ({ affirmation, duration, order, uuid }, index) => {
              return (
                <SplideSlide
                  id={index}
                  key={uuid}
                  order={order}
                  data-splide-interval={duration}
                >
                  <p>{affirmation}</p>
                </SplideSlide>
              );
            },
          )}
        </Splide> */}
      </section>
    </>
  );
};
export default DisplayAffirmations;
