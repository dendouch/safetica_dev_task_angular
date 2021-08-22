import { Time } from "@angular/common";

export class Person {
    name: string;
    birth_year: string;
    url: string;
}

export class PersonDetailed extends Person {
    // height: number;
    // mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    gender: string;
    homeworld: string;
    // films: string[];
    // species: string[];
    // vehicles: string[];
    // starships: string[];
    // created: Time;
    // edited: Time;
}
