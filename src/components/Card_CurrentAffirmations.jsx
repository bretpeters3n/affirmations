import "../App.css";
import { AiFillEdit } from "react-icons/ai";
// import { useN avigate } from "react-router-dom";

export function Card_CurrentAffirmations(props) {
  // const navigate = useNavigate();
  let affirmation = props.affirmation;
  console.log(affirmation);
  let duration = props.duration;
  console.log(duration);
  let order = props.order;
  console.log(order);
  let uuid = props.uuid;
  console.log(uuid);
  console.log(typeof uuid);
  let index = props.index;
  console.log(index);
  console.log(typeof index);

  // const handleEditAffirmationClick = (event) => {
  //   // let editEl = event.target.parentElement.parentElement.parentElement.parentElement;
  //   let editEl = event.target.closest("li");
  //   let editId = editEl.getAttribute("key");
  //   console.log("editId: " + editId);
  //   console.log("editEl: " + editEl);
  //   console.log(editEl);
  //   // navigate("/edit", { state: { affirmation_id: editId } }); // Pass optional second argument
  // };

  return (
    <li /*style={{ display: "none" }}*/ className="splide__slide__EDIT">
      <div className="currentCard">
        <div className="card grid">
          <p className="theme-switcher card-body">
            {props.affirmation}
            {props.duration}
            {props.order}
            {props.uuid}
          </p>
          <button
            onClick={(e) => {
              console.log(e.target.closest("li"));
            }}
            className="theme-switcher edit"
          >
            <AiFillEdit size={20} className="reactIcons" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default Card_CurrentAffirmations;
