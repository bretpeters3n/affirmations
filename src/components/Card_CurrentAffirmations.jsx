import '../App.css';
import { AiFillEdit } from "react-icons/ai";

export function Card_CurrentAffirmations(props) {
  return (
    <li id={props.index} className="splide__slide__EDIT" key={props.uuid}>
      <div className="currentCard">
        <div className="card grid">
          <p className="theme-switcher card-body">{props.affirmation}</p>
          <button /*onClick={handleEditAffirmationClick}*/ className="theme-switcher edit">
            <AiFillEdit size={20} className="reactIcons"/>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card_CurrentAffirmations;