// import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { AiFillEdit } from "react-icons/ai";
// import useConfirm from "./UseConfirm";
// import { Button as ButtonMUI } from "@mui/material";
// import DefineGetSetAffirmationsArray from "./DefineGetSetAffirmationsArray";
// import defaultAffirmationsArray from "./DefaultAffirmations";
// import MyButton from "./MyButton";
import Button from "./Button";
// import { Card_CurrentAffirmations as Card } from "./Card_CurrentAffirmations";
import AffirmationParams from "./AffirmationParams";

const CurrentAffirmations = () => {
  //   const navigate = useNavigate();

  //   const [isActive, setIsActive] = useState(false);

  const handleAddAffirmationClick = () => {
    // 👇️ toggle isActive state on click
    // setIsActive((current) => !current);
  };

  return (
    <>
      <section className="traditional__layout">
        <h1 className="theme-switcher text-3xl font-bold text-purple-600 pb-2">
          Current Affirmations
        </h1>
        <div className="d-flex flex-column align-items-center">
          {/* <Link to="/add">
            <MyButton
              text="Add new Affirmation"
              onClick={handleAddAffirmationClick}
            />
          </Link> */}
          <Link to="/add">
            <Button
              text="Add new Affirmation"
              onClick={handleAddAffirmationClick}
            />
          </Link>
        </div>
        <div className="d-flex flex-column align-items-center pt-4 pb-1">
          <AffirmationParams />
        </div>
      </section>
    </>
  );
};
export default CurrentAffirmations;
