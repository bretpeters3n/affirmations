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