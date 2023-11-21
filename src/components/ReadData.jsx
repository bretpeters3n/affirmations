import defaultAffirmationsArray from './DefaultAffirmations';
import affirmationsArrayPOST from './StoreData'
// const { AsyncLocalStorage } = require("async_hooks");

const ReadData = () => {

    // load default affirmations
    let affirmationsArray = defaultAffirmationsArray;
    // check for 'affirmationsUnique' in localStorage
    // if it does not exist, create it and fill with . If it does exist, transfer it to var
    affirmationsArray = localStorage.getItem('affirmationsUnique') ? JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;
    affirmationsArrayPOST({affirmationsArray});
}
export default ReadData;