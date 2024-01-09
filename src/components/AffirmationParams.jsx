// import { useState, useEffect } from "react";

const AffirmationParams = () => {
  //   const [group, setGroup] = useState("");
  //   const [affirmations] = useGroupList(group);
  let animal = "default";

  return (
    <div className="affirmation-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //   requestPets();
        }}
      >
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              //   setAnimal(e.target.value);
              //   setBreed("");
            }}
          >
            <option />
            {/* {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))} */}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default AffirmationParams;

/* Include these things in the form of a form
 - Affirmation Groups drop down
 - List of Current Affirmations list
    - Actions you can take on each affirmation (e.g. edit)
 - Actions you can take on the list as a whole (if any)
*/
