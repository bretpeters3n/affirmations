import {BrowserRouter, useNavigate, Route, Routes, Link, useLocation } from 'react-router-dom'
import useConfirm from './UseConfirm';
import { Button } from '@mui/material';
// import defaultAffirmationsArray from './DefaultAffirmations';
import DefineGetSetAffirmationsArray from './DefineGetSetAffirmationsArray';
import Affirmation from './Classes'; // Affirmation class

const AddAffirmation = () => {
  
  const navigate = useNavigate();

  // define, get, and set data
  let affirmationsArray = DefineGetSetAffirmationsArray();

  const [Dialog, confirmDelete] = useConfirm(
    `Confirm addition?`,
    `Are you sure you want to add this affirmations?`,
  ) 
  const handleAddAffirmationClick = async () => {
    const ans = await confirmDelete()
    if (ans) {
      const affirmation = document.getElementById('affirmationText').value;
      if (!affirmation) {
        alert('Affirmation text is empty. Please add you affirmation.')
      } else {
        const newAffirmation = new Affirmation(affirmation);
        // newAffirmation.calcLength();
        affirmationsArray.unshift(newAffirmation);
        localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
        navigate("/current");
      }
    }
    else {
        return;
    }
  }
  const [Dialog2, confirmDelete2] = useConfirm(
    `Cancel adding affirmation?`,
    `Are you sure you want to cancel adding this affirmation?`,
  ) 
  const handleCancelAddAffirmationClick = async () => {
    const ans = await confirmDelete2()
    if (ans) {
        navigate("/current");
    }
    else {
        return;
    }
  }

  return (
      <>
        <section className="traditional__layout addAffirmation">
            <h1 className="text-3xl font-bold text-purple-600 pb-2">
                Add Affirmation
            </h1>
            <div className="pb-2">
                <p>Enter your affirmation below</p>
            </div>
                <form className="align-items-center pb-3">
                    <textarea className="" id="affirmationText" placeholder="Type/paste your affirmation here"></textarea>
                </form>
                <div className="flex">
                    <Button onClick={handleCancelAddAffirmationClick}>Cancel</Button>
                    <Dialog />
                    <button className="theme-switcher btn btn-outline-primary" onClick={handleAddAffirmationClick}>Add affirmation</button>
                    <Dialog2 />
                </div>
        </section>
      </>
  )
}
export default AddAffirmation;