import { Splide, SplideSlide } from '@splidejs/react-splide';
import defaultAffirmationsArray from './DefaultAffirmations';
// import affirmationsArrayGET from './ReadData'


const DisplayAffirmations = () => {
    
    // define data
    let affirmationsArray = defaultAffirmationsArray;
    // get data
    function readData() {
        affirmationsArray = localStorage.getItem('affirmationsUnique') ? JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;
        localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
    }
    // read and set data
    readData();

    return (
        <>
            <section className="home-slideshow w-80 position-absolute top-50 start-50 translate-middle">
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