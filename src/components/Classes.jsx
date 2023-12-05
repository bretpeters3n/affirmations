export default class Affirmation {
    constructor(affirmation) {
        this.group = 'Default Affirmations';
        this.affirmation = affirmation;
        this.order = '69';
        this.uuid = 'install this and creat method';

        let limit = 60;
        let affLength = affirmation.length;
        let short = '4000';
        let long = '8000';
        if (affLength < limit) {
        console.log('smaller than 10. It is: ' + affLength)
        this.duration = short;
        } else {
        console.log('larger than 10. It is: ' + affLength)
        this.duration = long;
        }
    }
}

// if you add another class here, figure out how to export them all here:
// https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910