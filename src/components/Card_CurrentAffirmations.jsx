import '../App.css';
import { AiFillEdit } from "react-icons/ai";
import {BrowserRouter, useNavigate, Route, Routes, Link } from 'react-router-dom'


export function Card_CurrentAffirmations(props) {

  const navigate = useNavigate();

  const handleEditAffirmationClick = event => {
    // let editEl = event.target.parentElement.parentElement.parentElement.parentElement;
    let editEl = event.target.closest("li");
    let editId = editEl.getAttribute("id");
    console.log('editId: ' + editId);
    console.log('editEl: ' + editEl);
    console.log(editEl);
    navigate("/edit", { state: { affirmation_id: editId } }); // Pass optional second argument
  }

  return (
    <li id={props.index} className="splide__slide__EDIT" key={props.uuid}>
      <div className="currentCard">
        <div className="card grid">
          <p className="theme-switcher card-body">{props.affirmation}</p>
          <button onClick={handleEditAffirmationClick} className="theme-switcher edit">
            <AiFillEdit size={20} className="reactIcons"/>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card_CurrentAffirmations;