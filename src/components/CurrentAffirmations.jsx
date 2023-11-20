import { useState } from 'react'
import {BrowserRouter, useNavigate, Route, Routes, Link } from 'react-router-dom'
import { AiFillEdit } from "react-icons/ai";
import defaultAffirmationsArray from './DefaultAffirmations';


const CurrentAffirmations = () => {
    // The only two required props for the modal dialog are isDialogVisible
    // (to indicate whether the dialog should be visible or not) and closeDialog
    // (a function setting isDialogVisible to false). Let's create them below.

    // const [isDialogVisible, setIsDialogVisible] = useState(false);
    // const openDialog = () => setIsDialogVisible(true);
    // const closeDialog = () => setIsDialogVisible(false);

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false)

    const handleAddAffirmationClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    }
    // const handleDeleteAffirmationClick = event => {
    //     let editEl = event.target.parentElement.parentElement.parentElement;
    //     let editId = editEl.getAttribute("id");
    //     console.log('editId: ' + editId);
    //     console.log('editEl: ' + editEl);
    //     editEl.remove();
        
    //     affirmationsArray = affirmationsArray.slice(0, editId).concat(affirmationsArray.slice(editId+1));
    //     localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));        
    // }
    const handleEditAffirmationClick = event => {
        let editEl = event.target.parentElement.parentElement.parentElement.parentElement;
        let editId = editEl.getAttribute("id");
        console.log('editId: ' + editId);
        console.log('editEl: ' + editEl);
        console.log(editEl);
        navigate("/edit", { state: { affirmation_id: editId } }); // Pass optional second argument
    }
    const handleLoadDefaultAffirmationClick = () => {
        console.log('clicked load')
        let affirmationsArray = defaultAffirmationsArray;
        localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
        navigate("/current");
    }

    // load default affirmations
    let affirmationsArray = defaultAffirmationsArray;

    // check for affirmations in localStorage
    // if it does not exist, create it and fill with . If it does exist, transfer it to var
    affirmationsArray = localStorage.getItem('affirmationsUnique') ? JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;
    // save in localStorage
    localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
    // for testing
    console.log(affirmationsArray);

    return (
        <>
            <section className="traditional__layout">
                <h1 className="theme-switcher text-3xl font-bold text-purple-600 pb-2">
                    Current Affirmations
                </h1>
                <Link to="/add"><button className="theme-switcher" onClick={handleAddAffirmationClick}>Add new affirmation</button></Link>
                <div className="pt-4 pb-1">
                    <p>List of affirmations:</p>
                </div>
                <ul className='currentAffirmations'>
                    {affirmationsArray.map((affirmation, index, affirmationsArray) => {
                        return (
                                <li id={index} className="splide__slide__EDIT" key={index}>
                                {/* // <li id={index} onClick={openDialog} className="splide__slide__EDIT" key={index}> */}
                                    <div className="currentCard">
                                        <div className="card grid">
                                            <p className="theme-switcher card-body">{affirmation}</p>
                                            <button onClick={handleEditAffirmationClick} className="theme-switcher edit">
                                                <AiFillEdit size={20} className="reactIcons"/>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                        );
                    })}
                </ul>
                <div className="pb-2 pt-1">
                    <p>End of list</p>
                </div>
                <div className="pb-2">
                    <button className="theme-switcher" onClick={handleLoadDefaultAffirmationClick}>load default affirmations</button>    
                </div>
                
                {/* <ModalDialog isDialogVisible={isDialogVisible} closeDialog={closeDialog}>
                    <p>Confirm deletion</p>
                    <p>Are you sure you want to delete this affirmation?</p>
                    <button onClick={closeDialog}>Cancel</button>
                    <button onClick={closeDialog}>Confirm</button>
                </ModalDialog> */}
            </section>
        </>
    )
}
export default CurrentAffirmations;