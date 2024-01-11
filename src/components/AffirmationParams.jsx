import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Card_CurrentAffirmations as Card } from "./Card_CurrentAffirmations";
// import { Button as ButtonMUI } from "@mui/material";
// import Button from "./Button";
import DefineGetSetAffirmationsArray from "./DefineGetSetAffirmationsArray";

const AffirmationParams = () => {
  const GROUPS = [
    "Default Affirmations",
    "Share Affirmations",
    "Coding Affirmations",
  ];

  const [currentGroup, setCurrentGroup] = useState(GROUPS[0]);

  const [currentGroupAffirmations, setCurrentGroupAffirmations] = useState([
    {
      affirmation: "You got this",
      duration: "4000",
      order: "1",
      uuid: "bfd006b8-0f59-4e3a-8e7b-194531a48891",
    },
    {
      affirmation: "You’ll figure it out",
      duration: "4000",
      order: "2",
      uuid: "03979718-4466-4e72-8438-cf7d05ee5e54",
    },
    {
      affirmation: "You’re a smart cookie",
      duration: "4000",
      order: "3",
      uuid: "ecf29ae1-7141-4991-a556-41ee66a0c52c",
    },
    {
      affirmation: "I believe in you",
      duration: "4000",
      order: "4",
      uuid: "b87ef72c-adb0-4f6b-8790-2f4b6f7b1244",
    },
    {
      affirmation:
        "Sucking at something is the first step towards being good at something",
      duration: "8000",
      order: "5",
      uuid: "b87ef72c-adb0-4f6b-4067-2f4b6f7b1244",
    },
  ]);

  let affirmationsArray = DefineGetSetAffirmationsArray();
  console.log("affirmationsArray is: " + JSON.stringify(affirmationsArray));

  useEffect(() => {
    requestAffirmations();
  }, [currentGroup]);

  function requestAffirmations() {
    console.log("currentGroup is: " + JSON.stringify(currentGroup));
    affirmationsArray[0].currentGroup = currentGroup;
    // let currentGroupName = affirmationsArray[0].currentGroup;
    // console.log("currentGroupName is: " + JSON.stringify(currentGroupName));

    let affirmationGroupsObject = affirmationsArray[0].groups;
    console.log(
      "affirmationGroupsObject is: " + JSON.stringify(affirmationGroupsObject),
    );

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
    console.log(
      "currentGroupAffirmations is: " +
        JSON.stringify(currentGroupAffirmations),
    );
  }

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
        <form>
          <label htmlFor="currentGroup">
            <span className="italic">Select affirmation group:</span>
            <select
              id="currentGroup"
              value={currentGroup}
              onChange={(e) => {
                setCurrentGroup(e.target.value);
                // requestAffirmations();
              }}
            >
              <option />
              {GROUPS.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </label>
          {/* {currentGroupAffirmations.map(({ affirmation, duration }, index) => (
            <option key={index} value={duration}>
              {affirmation}
            </option>
          ))} */}
        </form>
      </div>
      <div className="d-flex flex-column align-items-center pt-4 pb-1">
        <p className="italic">Select affirmation group:</p>
        {/* <p className="italic">{JSON.stringify(currentGroup)}</p> */}
        {/* <ButtonMUI
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
        </ButtonMUI> */}
      </div>
      <div className="pt-4 pb-1">
        <p className="italic">List of {currentGroup} affirmations:</p>
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
