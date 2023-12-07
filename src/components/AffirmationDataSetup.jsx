import DefineGetSetAffirmationsArray from './DefineGetSetAffirmationsArray';

const AffirmationDataSetup = () => {
  
  // define, get, and set data
  let affirmationsArray = DefineGetSetAffirmationsArray();

  // object of affirmation groups
  let affirmationGroupsObject = affirmationsArray[0].groups;

  // define var for key of affirmation group we are attempting to display
  let groupKey;
  // assign the wanted key to the var
  Object.entries(affirmationGroupsObject).forEach(entry => {
      const [key, value] = entry;
      if (value.group === "Default Affirmations") {
          groupKey = key;
      } 
  });

  // assign var with array of affirmations we are attempting to display
  let currentGroupAffirmations = affirmationGroupsObject[groupKey].affirmations;

}

export default AffirmationDataSetup();