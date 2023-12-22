import { useState } from 'react'
import {BrowserRouter, useNavigate, Route, Routes, Link } from 'react-router-dom'
import { AiFillEdit } from "react-icons/ai";
import useConfirm from './UseConfirm';
import { Button as ButtonMUI } from '@mui/material';
import DefineGetSetAffirmationsArray from './DefineGetSetAffirmationsArray';
import defaultAffirmationsArray from './DefaultAffirmations';
import MyButton from './MyButton';
import Button from './Button';
import { Card_CurrentAffirmations as Card } from './Card_CurrentAffirmations';


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
    
    // // assign var with array of affirmations we are attempting to display
    // let currentGroupAffirmations = affirmationGroupsObject[groupKey].affirmations;

    // load different affirmation groups
    const [affirmationGroup, setAffirmationGroup] = useState("Default Affirmations");

    function handleLoadAffirmationGroup(changeGroup) {
        setAffirmationGroup(() => 
            {
                // cycle through affirmation object (from localstorage) and set groupKey to reflect new group that was just selected
                Object.entries(affirmationGroupsObject).forEach(entry => {
                    const [key, value] = entry;
                    if (value.group === changeGroup) {
                        groupKey = key;
                        console.log(key)
                    } 
                });

                // assign var with array of affirmations we are attempting to display
                setCurrentGroupAffirmations(affirmationGroupsObject[groupKey].affirmations)
                // console.log(currentGroupAffirmations)

            });
        // // pass in group name
        // console.log({changeGroup});
        // console.log(typeof {changeGroup});

        
    }

    const [currentGroupAffirmations, setCurrentGroupAffirmations] = useState(affirmationGroupsObject[groupKey].affirmations);

    return (
        <>
            <section className="traditional__layout">
                <h1 className="theme-switcher text-3xl font-bold text-purple-600 pb-2">
                    Current Affirmations
                </h1>
                <div className='d-flex flex-column align-items-center'>
                    {/* <Link to="/add">
                        <MyButton text='Add new Affirmation' onClick={handleAddAffirmationClick}/>
                    </Link> */}
                    <Link to="/add">
                        <Button text='Add new Affirmation' onClick={handleAddAffirmationClick}/>
                    </Link>
                </div>
                <div className="d-flex flex-column align-items-center pt-4 pb-1">
                    <p className="italic">Select affirmation group:</p>
                    <ButtonMUI onClick={() => handleLoadAffirmationGroup('Default Affirmations')}>Default Affirmations</ButtonMUI>
                    <ButtonMUI onClick={() => handleLoadAffirmationGroup('Share Affirmations')}>Share Affirmations</ButtonMUI>
                    <ButtonMUI onClick={() => handleLoadAffirmationGroup('Coding Affirmations')}>Coding Affirmations</ButtonMUI>
                </div>
                <div className="pt-4 pb-1">
                    <p className="italic">List of current affirmations:</p>
                </div>
                <ul className='currentAffirmations'>
                    {currentGroupAffirmations.map(({group, affirmation, duration, order, uuid}, index) => {
                            return (
                                <Card index={index} group={group} affirmation={affirmation} duration={duration} order={order} uuid={uuid}/>
                        );
                    })}
                </ul>
                <div className="pb-1 pt-1">
                    <p className="italic">End of list</p>
                </div>
                <div className="pb-2">
                    <ButtonMUI onClick={handleDeleteAllAffirmationClick}>delete all affirmations</ButtonMUI>
                    <Dialog />    
                    <ButtonMUI onClick={handleLoadDefaultAffirmationClick}>load default affirmations</ButtonMUI>    
                    <Dialog2 />  
                </div>
                
                {/* <ModalDialog isDialogVisible={isDialogVisible} closeDialog={closeDialog}>
                    <p>Confirm deletion</p>
                    <p>Are you sure you want to delete this affirmation?</p>
                    <button onClick={closeDialog}>Cancel</button>
                    <button onClick={closeDialog}>Confirm</button>
                </Modal Dialog> */}
            </section>
        </>
    )
}
export default CurrentAffirmations;