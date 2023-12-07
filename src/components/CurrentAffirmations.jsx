import { useState } from 'react'
import {BrowserRouter, useNavigate, Route, Routes, Link } from 'react-router-dom'
import { AiFillEdit } from "react-icons/ai";
import useConfirm from './UseConfirm';
import { Button } from '@mui/material';
import DefineGetSetAffirmationsArray from './DefineGetSetAffirmationsArray';
import defaultAffirmationsArray from './DefaultAffirmations';
import MyButton from './Button';


const CurrentAffirmations = () => {
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false)

    const handleAddAffirmationClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    }
    const [Dialog, confirmDelete] = useConfirm(
        `Confirm deletion?`,
        `Are you sure you want to delete ALL affirmations?`,
    ) 
    const handleDeleteAllAffirmationClick = async () => {
        const ans = await confirmDelete()
        if (ans) {
            let affirmationsArray = [ "Your first affirmation. Edit me!" ]
            localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
            navigate("/current");
        }
        else {
            return;
        }
    }
    const [Dialog2, confirmDelete2] = useConfirm(
        `Confirm load default?`,
        `Are you sure you want to load default affirmations? This will overwright all current affirmations`,
    ) 
    const handleLoadDefaultAffirmationClick = async () => {
        const ans = await confirmDelete2()
        if (ans) {
            let affirmationsArray = defaultAffirmationsArray;
            localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
            navigate("/current");
        }
        else {
            return;
        }
    }
    const handleEditAffirmationClick = event => {
        // let editEl = event.target.parentElement.parentElement.parentElement.parentElement;
        let editEl = event.target.closest("li");
        let editId = editEl.getAttribute("id");
        console.log('editId: ' + editId);
        console.log('editEl: ' + editEl);
        console.log(editEl);
        navigate("/edit", { state: { affirmation_id: editId } }); // Pass optional second argument
    }

    // define, get, and set data
    let affirmationsArray = DefineGetSetAffirmationsArray();

    // object of affirmation groups
    let affirmationGroupsObject = affirmationsArray[0].groups;

    // define var for key of affirmation group we are attempting to display
    let groupKey;
    // assign the wanted key to the var
    Object.entries(affirmationGroupsObject).forEach(entry => {
        const [key, value] = entry;
        if (value.group === "Default Affirmations") {
            groupKey = key;
        } 
    });

    // assign var with array of affirmations we are attempting to display
    let currentGroupAffirmations = affirmationGroupsObject[groupKey].affirmations;

    return (
        <>
            <section className="traditional__layout">
                <h1 className="theme-switcher text-3xl font-bold text-purple-600 pb-2">
                    Current Affirmations
                </h1>
                <div className='flex'>
                    <Link to="/add">
                        <MyButton text='Add new Affirmation' onClick={handleAddAffirmationClick}/>
                    </Link>
                </div>
                <div className="pt-4 pb-1">
                    <p className="italic">Your affirmation groups:</p>
                </div>
                <div className="pt-4 pb-1">
                    <p className="italic">List of current affirmations:</p>
                </div>
                <ul className='currentAffirmations'>
                    {currentGroupAffirmations.map(
                        (
                            { group, affirmation, duration, order, uuid},
                            index
                        ) => {
                            return (
                                <li id={index} className="splide__slide__EDIT" key={uuid}>
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
                <div className="pb-1 pt-1">
                    <p className="italic">End of list</p>
                </div>
                <div className="pb-2">
                    <Button onClick={handleDeleteAllAffirmationClick}>delete all affirmations</Button>
                    <Dialog />    
                    <Button onClick={handleLoadDefaultAffirmationClick}>load default affirmations</Button>    
                    <Dialog2 />  
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