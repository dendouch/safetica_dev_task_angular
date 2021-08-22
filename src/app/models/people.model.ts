import { Person } from "./person.model";

export class People {
    count: number;
    next?: string;
    previous?: string;
    results: Person[];
}
