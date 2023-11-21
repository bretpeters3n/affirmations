import { Splide, SplideSlide } from '@splidejs/react-splide';
import defaultAffirmationsArray from './DefaultAffirmations';
// import affirmationsArrayGET from './ReadData'


const DisplayAffirmations = () => {
    
    // read data
    let affirmationsArray;
    const readData = async () => {
        affirmationsArray = defaultAffirmationsArray;
        try {
            affirmationsArray = localStorage.getItem('affirmationsUnique') ? await JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;
        } catch(e) {
            console.log(e);
        }
        return affirmationsArray;
    }
    (async () => {
        affirmationsArray = await readData();
    })()

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