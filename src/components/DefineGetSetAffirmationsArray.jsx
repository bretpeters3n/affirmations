import defaultAffirmationsArray from './DefaultAffirmations';

export default function DefineGetSetAffirmationsArray() {
    
    // define data
    let affirmationsArray = defaultAffirmationsArray;
    // get data
    async function readData() {
        affirmationsArray = localStorage.getItem('affirmationsUnique') ? JSON.parse(localStorage.getItem('affirmationsUnique')) : affirmationsArray;
    }
    // set data
    readData().then(() => {
        localStorage.setItem('affirmationsUnique', JSON.stringify(affirmationsArray));
    })
    return affirmationsArray;
}