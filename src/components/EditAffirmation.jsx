import {BrowserRouter, useNavigate, Route, Routes, Link, useLocation } from 'react-router-dom'
import useConfirm from './UseConfirm';
import { Button } from '@mui/material';
import DefineGetSetAffirmationsArray from './DefineGetSetAffirmationsArray';


const EditAffirmation = () => {

    const navigate = useNavigate();

    // grab ID from previous page. ID of array element we want to edit
    const location = useLocation();
    console.log(location.state);
    let affirmationIDToEdit = location.state.affirmation_id;
    console.log(affirmationIDToEdit);

    // define, get, and set data
    let affirmationsArray = DefineGetSetAffirmationsArray();

    // grab affirmation User wishes to edit 
    let affirmationTextToEdit = affirmationsArray[affirmationIDToEdit].affirmation;
    console.log(affirmationTextToEdit);
    
    const [DialogEdit, confirmEdit] = useConfirm(
        `Confirm update?`,
        `Are you sure you want to update this affirmations?`,
    ) 
    const handleConfirmEditAffirmationClick = async () => {
        const ans = await confirmEdit()
        if (ans) {
            const affirmationText = document.getElementById('affirmationText').value;
            if (!affirmationText) {
                alert('Affirmation text is empty. Please add you affirmation.')
            } else {
                affirmationsArray[affirmationIDToEdit].affirmation = affirmationText;
                // reset duration property
                let affirmation = affirmationText;
                let limit = 60;
                let affLength = affirmation.length;
                let short = '4000';
                let long = '8000';
                if (affLength < limit) {
                    console.log('smaller than 10. It is: ' + affLength)
                    affirmationsArray[affirmationIDToEdit].duration = short;
                } else {
                    console.log('larger than 10. It is: ' + affLength)
                    affirmationsArray[affirmationIDToEdit].duration = long;
                }        
                localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
                navigate("/current");
            }
        }
        else {
            return;
        }
    }

    const [DialogDelete, confirmDelete] = useConfirm(
        `Confirm deletion?`,
        `Are you sure you want to delete this affirmations?`,
    ) 
    const handleConfirmDeleteAffirmationClick = async () => {
        const ans = await confirmDelete()
        if (ans) {
            // grab index value of affirmation
            // replace below with splice/concat solution
            const n = affirmationIDToEdit;
            affirmationsArray = affirmationsArray.slice(0, n).concat(affirmationsArray.slice(n+1))

            // test array
            console.log(affirmationsArray);

            // save array
            localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));

            // go back to current affirmations
            navigate("/current");
            
            // remove that value from array and save array

            // const affirmationText = document.getElementById('affirmationText').value;
            // if (!affirmationText) {
            //     alert('Affirmation text is empty. Please add you affirmation.')
            // } else {
            //     affirmationsArray[affirmationIDToEdit] = affirmationText;        
            //     localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
            //     navigate("/current");
            // }
        }
        else {
            return;
        }
    }

    const [DialogCancel, confirmCancel] = useConfirm(
        `Cancel edit?`,
        `Are you sure you want to cancel this edit to your affirmation?`,
    ) 
    const handleCancelEditAffirmationClick = async () => {
        const ans = await confirmCancel()
        if (ans) {
            navigate("/current");
        }
        else {
            return;
        }
    }

    // function handleConfirmEditAffirmationClick(e) {
    //     e.preventDefault();
    //     console.log('confirm pressed');
    //     const affirmationText = document.getElementById('affirmationText').value;
    //     if (!affirmationText) {
    //       alert('Affirmation text is empty. Please add you affirmation.')
    //     } else {
    //         affirmationsArray[affirmationIDToEdit] = affirmationText;        
    //         localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
    //         navigate("/current");
    //     }
    // }
    // function handleCancelEditAffirmationClick(e) {
    //     e.preventDefault();
    //     console.log('cancel pressed');
    //     navigate("/current");
    // }

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
                        <div className="flex">
                            <Button onClick={handleCancelEditAffirmationClick}>Cancel</Button>
                            <DialogCancel />
                            <button className="theme-switcher btn btn-outline-primary" onClick={handleConfirmEditAffirmationClick}>Update Affirmation</button>
                            <DialogEdit />
                            <button className="theme-switcher btn btn-danger" onClick={handleConfirmDeleteAffirmationClick}>Delete Affirmation</button>
                            <DialogDelete />
                        </div>
                </section>
        </>
    )
}
export default EditAffirmation;