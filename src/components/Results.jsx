// import { Card_CurrentAffirmations as Card } from "./Card_CurrentAffirmations";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Results = ({ currentGroupAffirmations }) => {
  const navigate = useNavigate();

  //   const location = useLocation();
  //   console.log(location.state);
  //   let editedGroupAffirmations = location.state.currentGroupAffirmations;
  //   currentGroupAffirmations ? currentGroupAffirmations : editedGroupAffirmations;
  //   console.log(editedGroupAffirmations);

  const handleEditAffirmationClick = (event) => {
    let editEl = event.target.closest("li");
    let editId = editEl.getAttribute("id");
    navigate("/edit", {
      state: {
        affirmation_id: editId,
        currentGroupAffirmations: currentGroupAffirmations,
      },
    }); // Pass optional second argument
  };

  return (
    <>
      {!currentGroupAffirmations.length ? (
        <h1>No Affirmations present</h1>
      ) : (
        currentGroupAffirmations.map((affirmation) => (
          <li
            id={affirmation.uuid}
            key={affirmation.uuid}
            className="splide__slide__EDIT"
          >
            <div className="currentCard">
              <div className="card grid">
                <p className="theme-switcher card-body">
                  {affirmation.affirmation}
                </p>
                <button
                  onClick={(e) => {
                    handleEditAffirmationClick(e);
                  }}
                  className="theme-switcher edit"
                >
                  <AiFillEdit size={20} className="reactIcons" />
                </button>
              </div>
            </div>
          </li>
        ))
      )}
    </>
  );
};

export default Results;
