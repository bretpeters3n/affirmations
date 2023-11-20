import {BrowserRouter, useNavigate, Route, Routes, Link, useLocation } from 'react-router-dom'
import defaultAffirmationsArray from './DefaultAffirmations';


const EditAffirmation = () => {

    const navigate = useNavigate();

    // grab ID from previous page. ID of array element we want to edit
    const location = useLocation();
    console.log(location.state);
    let affirmationIDToEdit = location.state.affirmation_id;
    console.log(affirmationIDToEdit);

    // grab affirmationArray
    // load default affirmations
    let affirmationsArray = defaultAffirmationsArray;
    // check for 'affirmationsUnique' in localStorage
    // if it does not exist, create it and fill with . If it does exist, transfer it to var
    affirmationsArray = localStorage.getItem('affirmationsUnique') ? JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;
    // save to localStorage
    localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));

    // grab affirmation User wishes to edit 
    let affirmationTextToEdit = affirmationsArray[affirmationIDToEdit];
    console.log(affirmationTextToEdit);
    

    function handleConfirmEditAffirmationClick(e) {
        e.preventDefault();
        console.log('confirm pressed');
        const affirmationText = document.getElementById('affirmationText').value;
        if (!affirmationText) {
          alert('Affirmation text is empty. Please add you affirmation.')
        } else {
            // switch out text in specified array item
            //Find index of specific object using findIndex method.    
            //Update object's name property.
            affirmationsArray[affirmationIDToEdit] = affirmationText;        
            localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
            navigate("/current");
        }
    }
    function handleCancelEditAffirmationClick(e) {
        e.preventDefault();
        console.log('cancel pressed');
        navigate("/current");
    }

    return (
        <>
                {/* <section className="addAffirmation pt-4 pb-4"> */}
                <section className="traditional__layout addAffirmation">
                    <h1 className="text-3xl font-bold text-purple-600 pb-2">
                        Edit Affirmation
                    </h1>
                    <div className="pb-2">
                        <p>Edit your affirmation below</p>
                    </div>
                        <form className="align-items-center pb-3">
                            <textarea className="" id="affirmationText" defaultValue={affirmationTextToEdit}></textarea>

                        </form>
                        <div className="flex ">
                            <button className="addAffirmation__button" onClick={handleCancelEditAffirmationClick}>Cancel</button>
                            <button className="addAffirmation__button" onClick={handleConfirmEditAffirmationClick}>Confirm</button>
                        </div>
                </section>
        </>
    )
}
export default EditAffirmation;