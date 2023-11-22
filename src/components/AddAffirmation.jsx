import {BrowserRouter, useNavigate, Route, Routes, Link, useLocation } from 'react-router-dom'
import useConfirm from './UseConfirm';
import { Button } from '@mui/material';
import defaultAffirmationsArray from './DefaultAffirmations';

const AddAffirmation = () => {
  
  const navigate = useNavigate();

  // Affirmation class
  class Affirmation {
      constructor(text) {
        this.text = text;
      //   this.perimeter = visible;
      }
    
      printInfo() {
        console.log(`Affirmation text: ${this.text}`);
      //   console.log(`Visible: ${this.visible}`);
      }
    }

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

  const [Dialog, confirmDelete] = useConfirm(
    `Confirm addition?`,
    `Are you sure you want to add this affirmations?`,
  ) 
  const handleAddAffirmationClick = async () => {
    const ans = await confirmDelete()
    if (ans) {
      const affirmationText = document.getElementById('affirmationText').value;
      if (!affirmationText) {
        alert('Affirmation text is empty. Please add you affirmation.')
      } else {
        new Affirmation(affirmationText);
        affirmationsArray.unshift(affirmationText);
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

  // function handleAddAffirmationClick(e) {
  //     e.preventDefault();
  //     const affirmationText = document.getElementById('affirmationText').value;
  //     if (!affirmationText) {
  //       alert('Affirmation text is empty. Please add you affirmation.')
  //     } else {
  //       let affirmation = new Affirmation(affirmationText);
  //       console.log(affirmation);
  //       affirmationsArray.unshift(affirmationText);
  //       localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
  //     }
  // }

  return (
      <>
              {/* <section className="addAffirmation pt-4 pb-4"> */}
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
                      {/* <div>
                          <button className="addAffirmation__button" onClick={handleAddAffirmationClick}>Add Affirmation</button>
                      </div> */}
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