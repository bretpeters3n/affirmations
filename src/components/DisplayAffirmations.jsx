import { Splide, SplideSlide } from '@splidejs/react-splide';
import defaultAffirmationsArray from './DefaultAffirmations';
// import affirmationsArrayGET from './ReadData'


const DisplayAffirmations = () => {
    
   // load default affirmations
   let affirmationsArray = defaultAffirmationsArray;
   // check for 'affirmationsUnique' in localStorage
   // if it does not exist, create it and fill with . If it does exist, transfer it to var
   affirmationsArray = localStorage.getItem('affirmationsUnique') ? JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;
   // save to localStorage
   localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));

    return (
        <>
            <section className="w-80 position-absolute top-50 start-50 translate-middle">
                <Splide options={ {
                    pagination : false,
                    arrows : false,
                    type : 'fade',
                    rewind : true,
                    autoplay : true,
                    speed: 500,
                    width : '100vw',
                    interval: 4000,
                    } } aria-label="My Affirmation Quotes">
                {affirmationsArray.map((affirmation, i, affirmationsArray) => {
                            return (
                                <SplideSlide key={i}>
                                <p>{affirmationsArray[i]}</p>
                            </SplideSlide>
                            );
                        })}
                </Splide>
            </section>
        </>
    )
}
export default DisplayAffirmations;