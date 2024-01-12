import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Card_CurrentAffirmations as Card } from "./Card_CurrentAffirmations";
// import { Button as ButtonMUI } from "@mui/material";
// import Button from "./Button";
import Results from "./Results";
import DefineGetSetAffirmationsArray from "./DefineGetSetAffirmationsArray";

const AffirmationParams = () => {
  let groups = [];

  let affirmationsArray = DefineGetSetAffirmationsArray();

  const [currentGroup, setCurrentGroup] = useState(
    affirmationsArray[0].currentGroup,
  );

  // gather groups from localStorage and make a new array of it
  let reformattedGroupsArray = affirmationsArray[0].groups;
  for (let i = 0; i < reformattedGroupsArray.length; i++) {
    groups.push(reformattedGroupsArray[i].group);
  }

  const [currentGroupAffirmations, setCurrentGroupAffirmations] = useState([]);

  useEffect(() => {
    requestAffirmations();
  }, [currentGroup]);

  function requestAffirmations() {
    affirmationsArray[0].currentGroup = currentGroup;
    console.log(affirmationsArray);

    // save array
    localStorage.setItem(
      "affirmationsUnique",
      JSON.stringify(affirmationsArray),
    );

    let affirmationGroupsObject = affirmationsArray[0].groups;
    let groupKey;
    Object.entries(affirmationGroupsObject).forEach((entry) => {
      const [key, value] = entry;
      if (value.group === currentGroup) {
        groupKey = key;
        setCurrentGroupAffirmations(
          affirmationGroupsObject[groupKey].affirmations,
        );
      }
    });
    console.log(affirmationsArray);
  }

  // must convert with stringify before saving or using data. Correct?
  // cloning an object -> let adjustedRecipe = structuredClone(recipe);

  return (
    <>
      <div className="affirmation-params">
        <form>
          <label htmlFor="currentGroup">
            <span className="italic">Select affirmation group:</span>
            <select
              id="currentGroup"
              value={currentGroup}
              onChange={(e) => {
                setCurrentGroup(e.target.value);
              }}
            >
              {/* <option /> */}
              {groups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <div className="pt-4 pb-1">
        <p className="italic">List of {currentGroup} affirmations:</p>
      </div>
      <ul className="currentAffirmations">
        <Results currentGroupAffirmations={currentGroupAffirmations} />
      </ul>
      <div className="pb-1 pt-1">
        <p className="italic">End of list</p>
        <p className="codeVomit">{JSON.stringify(currentGroup)}</p>
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
