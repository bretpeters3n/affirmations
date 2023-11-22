import {BrowserRouter, useNavigate, Route, Routes, Link, useLocation } from 'react-router-dom'
import useConfirm from './UseConfirm';
import { Button } from '@mui/material';
import defaultAffirmationsArray from './DefaultAffirmations';


const EditAffirmation = () => {

    const navigate = useNavigate();

    // grab ID from previous page. ID of array element we want to edit
    const location = useLocation();
    console.log(location.state);
    let affirmationIDToEdit = location.state.affirmation_id;
    console.log(affirmationIDToEdit);

    // define data
    let affirmationsArray = defaultAffirmationsArray;
    // get data
    async function readData() {
        affirmationsArray = localStorage.getItem('affirmationsUnique') ? JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;
    }
    // set data
    readData().then(() => {
        // affirmationsArray = await readData();
        localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
    })

    // grab affirmation User wishes to edit 
    let affirmationTextToEdit = affirmationsArray[affirmationIDToEdit];
    console.log(affirmationTextToEdit);
    
    const [Dialog, confirmDelete] = useConfirm(
        `Confirm update?`,
        `Are you sure you want to update this affirmations?`,
    ) 
    const handleConfirmEditAffirmationClick = async () => {
        const ans = await confirmDelete()
        if (ans) {
            const affirmationText = document.getElementById('affirmationText').value;
            if (!affirmationText) {
                alert('Affirmation text is empty. Please add you affirmation.')
            } else {
                affirmationsArray[affirmationIDToEdit] = affirmationText;        
                localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
                navigate("/current");
            }
        }
        else {
            return;
        }
    }
    const [Dialog2, confirmDelete2] = useConfirm(
        `Cancel edit?`,
        `Are you sure you want to cancel this edit to your affirmation?`,
    ) 
    const handleCancelEditAffirmationClick = async () => {
        const ans = await confirmDelete2()
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
                            <Dialog2 />
                            <button className="theme-switcher btn btn-outline-primary" onClick={handleConfirmEditAffirmationClick}>Update</button>
                            <Dialog />
                        </div>
                </section>
        </>
    )
}
export default EditAffirmation;