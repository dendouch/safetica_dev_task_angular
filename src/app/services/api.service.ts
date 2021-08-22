import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    public readonly PEOPLE_API = `https://swapi.dev/api/people/?page=`;
    public nextPageUrl?: string;
    public previousPageUrl?: string;

    constructor(private client: HttpClient) {}

    //Probably add some typing + caching
    getPeople(url: string = this.PEOPLE_API) {
        return this.client.get(url);
    }

    getPerson(url: string) {
        return this.client.get(url);
    }

    getWorld(url: string) {
        return this.client.get(url);
    }
}
