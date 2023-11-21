import defaultAffirmationsArray from './DefaultAffirmations';

const AddAffirmation = () => {
    
    // load default affirmations
    let affirmationsArray = defaultAffirmationsArray;

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

    // check for sojournAffirmations in localStorage
    // if it does not exist, create it and fill with . If it does exist, transfer it to var
    affirmationsArray = localStorage.getItem('affirmationsUnique') ? JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;

    localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));

    console.log(affirmationsArray);

    function handleAddAffirmationClick(e) {
        e.preventDefault();
        const affirmationText = document.getElementById('affirmationText').value;
        if (!affirmationText) {
          alert('Affirmation text is empty. Please add you affirmation.')
        } else {
          let affirmation = new Affirmation(affirmationText);
          console.log(affirmation);
          affirmationsArray.unshift(affirmationText);
          localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
        }
    }

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
                        <div>
                            <button className="addAffirmation__button" onClick={handleAddAffirmationClick}>Add Affirmation</button>
                        </div>
                </section>
        </>
    )
}
export default AddAffirmation;