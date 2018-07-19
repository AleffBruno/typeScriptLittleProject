


import {Person as Perso} from 'person';

class User implements Perso {
    name : string;
    age : number;
    saySomeMessage(message : string) : string {
        return message;
    }
    standardName() : string {
        return this.name.toUpperCase();
    }
}