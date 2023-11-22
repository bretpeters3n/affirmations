import { useState } from 'react'
import {BrowserRouter, useNavigate, Route, Routes, Link } from 'react-router-dom'
import { AiFillEdit } from "react-icons/ai";
import useConfirm from './UseConfirm';
// import { HiPlus } from "react-icons/hi";
import defaultAffirmationsArray from './DefaultAffirmations';


const CurrentAffirmations = () => {
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false)

    const handleAddAffirmationClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    }
    const [Dialog, confirmDelete] = useConfirm(
        'Are you sure?',
        'Are you sure you want to delete user "Isaac Kwok"?',
    )
    const handleDeleteAll = async () => {
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
    const handleEditAffirmationClick = event => {
        // let editEl = event.target.parentElement.parentElement.parentElement.parentElement;
        let editEl = event.target.closest("li");
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
    // const handleDeleteAllAffirmationClick = () => {
    //     console.log('clicked delete all')
    //     let affirmationsArray = [ "Your first affirmation. Edit me!" ]
    //     localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
    //     navigate("/current");
    // }

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

    return (
        <>
            <section className="traditional__layout">
                <h1 className="theme-switcher text-3xl font-bold text-purple-600 pb-2">
                    Current Affirmations
                </h1>
                <div className='flex'>
                    <Link to="/add">
                        <button className="theme-switcher btn btn-outline-primary" onClick={handleAddAffirmationClick}>
                            {/* <HiPlus size={20} className="reactIcons plus"/> */}
                            Add new Affirmation
                        </button>
                    </Link>
                </div>
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
                <div className="pb-1 pt-1">
                    <p>End of list</p>
                </div>
                <div className="pb-2">
                    <button className="theme-switcher btn btn-link" onClick={handleDeleteAll}>delete all affirmations</button>
                    <Dialog />    
                    <button className="theme-switcher btn btn-link" onClick={handleLoadDefaultAffirmationClick}>load default affirmations</button>    
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