import { useState } from "react";
// import { Link } from "react-router-dom";
import { Card_CurrentAffirmations as Card } from "./Card_CurrentAffirmations";
import { Button as ButtonMUI } from "@mui/material";
// import Button from "./Button";

import DefineGetSetAffirmationsArray from "./DefineGetSetAffirmationsArray";

const AffirmationParams = () => {
  //   const [affirmationGroup, setAffirmationGroup] = useState(
  //     "Default Affirmations",
  //   );
  //   const [affirmations] = useGroupList(group);
  const ANIMALS = ["dog", "cat", "horse"];
  let animal = ANIMALS[0];

  let affirmationsArray = DefineGetSetAffirmationsArray();

  let affirmationGroupsObject = affirmationsArray[0].groups;

  let groupKey;
  Object.entries(affirmationGroupsObject).forEach((entry) => {
    const [key, value] = entry;
    if (value.group === "Default Affirmations") {
      groupKey = key;
    }
  });

  const [affirmationGroup, setAffirmationGroup] = useState(
    "Default Affirmations",
  );

  function handleLoadAffirmationGroup(changeGroup) {
    setAffirmationGroup(() => {
      // cycle through affirmation object (from localstorage) and set groupKey to reflect new group that was just selected
      Object.entries(affirmationGroupsObject).forEach((entry) => {
        const [key, value] = entry;
        if (value.group === changeGroup) {
          groupKey = key;
          console.log(key);
        }
      });
      setCurrentGroupAffirmations(
        affirmationGroupsObject[groupKey].affirmations,
      );
    });
  }

  const [currentGroupAffirmations, setCurrentGroupAffirmations] = useState(
    affirmationGroupsObject[groupKey].affirmations,
  );

  //   const [Dialog, confirmDelete] = useConfirm(
  //     `Confirm deletion?`,
  //     `Are you sure you want to delete ALL affirmations?`,
  //   );
  //   const handleDeleteAllAffirmationClick = async () => {
  //     const ans = await confirmDelete();
  //     if (ans) {
  //       let affirmationsArray = ["Your first affirmation. Edit me!"];
  //       localStorage.setItem(
  //         "affirmationsUnique",
  //         JSON.stringify(affirmationsArray),
  //       );
  //       navigate("/current");
  //     } else {
  //       return;
  //     }
  //   };
  //   const [Dialog2, confirmDelete2] = useConfirm(
  //     `Confirm load default?`,
  //     `Are you sure you want to load default affirmations? This will overwright all current affirmations`,
  //   );

  // must convert with stringify before saving or using data. Correct?
  // cloning an object -> let adjustedRecipe = structuredClone(recipe);

  return (
    <>
      <div className="affirmation-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //   requestPets();
          }}
        >
          <label htmlFor="animal">
            <span className="italic">Select affirmation group:</span>
            <select
              id="animal"
              value={animal}
              onChange={(e) => {
                setCurrentGroupAffirmations(e.target.value);
                //   setBreed("");
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
          {currentGroupAffirmations.map((affirmation) => (
            <option key={affirmation} value={affirmation}>
              {affirmation}
            </option>
          ))}
        </form>
      </div>
      <div className="d-flex flex-column align-items-center pt-4 pb-1">
        <p className="italic">Select affirmation group:</p>
        <ButtonMUI
          onClick={() => handleLoadAffirmationGroup("Default Affirmations")}
        >
          Default Affirmations
        </ButtonMUI>
        <ButtonMUI
          onClick={() => handleLoadAffirmationGroup("Share Affirmations")}
        >
          Share Affirmations
        </ButtonMUI>
        <ButtonMUI
          onClick={() => handleLoadAffirmationGroup("Coding Affirmations")}
        >
          Coding Affirmations
        </ButtonMUI>
      </div>
      <div className="pt-4 pb-1">
        <p className="italic">List of {affirmationGroup} affirmations:</p>
      </div>
      <ul className="currentAffirmations">
        {currentGroupAffirmations.map(({ affirmation, duration }, index) => {
          return (
            <Card key={index} affirmation={affirmation} duration={duration} />
          );
        })}
      </ul>
      <div className="pb-1 pt-1">
        <p className="italic">End of list</p>
      </div>
    </>
  );
};

export default AffirmationParams;

/* Include these things in the form of a form
 - Affirmation Groups drop down
 - List of Current Affirmations list
    - Actions you can take on each affirmation (e.g. edit)
 - Actions you can take on the list as a whole (if any)
*/
