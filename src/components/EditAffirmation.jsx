import {BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom'

const EditAffirmation = () => {

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

    function handleConfirmAffirmationClick(e) {
        e.preventDefault();
        console.log('edit pressed');
        // const affirmationText = document.getElementById('affirmationText').value;
        // if (!affirmationText) {
        //   alert('Affirmation text is empty. Please add you affirmation.')
        // } else {
        //   let affirmation = new Affirmation(affirmationText);
        //   console.log(affirmation);
        //   affirmationsArray.push(affirmationText);
        //   localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
        // }
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
                            <textarea className="" id="affirmationText" placeholder="Type/paste your affirmation here"></textarea>

                        </form>
                        <div className="flex ">
                            <Link to="/current"><button className="addAffirmation__button">Cancel</button></Link>
                            <button className="addAffirmation__button" onClick={handleConfirmAffirmationClick}>Confirm</button>
                        </div>
                </section>
        </>
    )
}
export default EditAffirmation;