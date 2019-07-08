import * as _ from 'lodash';

export class Person {

    constructor(private name: string) { }

    public setElement() {
        const element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack', this.name], ' ');
        return element;
    }
}