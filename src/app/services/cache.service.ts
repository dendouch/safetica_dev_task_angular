import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class CacheService {
    public currentPage: number = 1;
    public currentFilter: string = "";

    constructor() {}
}
