import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { People } from "../models/people.model";
import { MatTableDataSource } from "@angular/material/table";
import { ApiService } from "../services/api.service";
import { Person } from "../models/person.model";
import { CacheService } from "../services/cache.service";

@Component({
    selector: "app-table-component",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss", "../app.component.scss"],
})
export class TableComponent implements OnInit {
    public loading: boolean = true;
    public hasNext: boolean;
    hasPrevious: boolean;
    public dataSource: MatTableDataSource<Person>;
    public displayedColumns: string[] = ["name", "birthYear"];

    constructor(
        private apiService: ApiService,
        public cacheService: CacheService,
        private router: Router
    ) {}

    ngOnInit(): void {
        console.log("TABLE ON INIT");
        this.loadPeople(`${this.apiService.PEOPLE_API}${this.cacheService.currentPage}`);
    }

    loadPeople(url: string): void {
        this.loading = true;
        this.apiService.getPeople(url).subscribe((data) => {
            this.apiService.nextPageUrl = (data as People).next;
            this.hasNext = this.apiService.nextPageUrl !== null;
            this.apiService.previousPageUrl = (data as People).previous;
            this.hasPrevious = this.apiService.previousPageUrl !== null;
            this.dataSource = new MatTableDataSource((data as People).results);
            this.dataSource.filter = this.cacheService.currentFilter;
            this.loading = false;
        });
    }

    loadNextPeople(): void {
        if (!this.hasNext) return;
        this.cacheService.currentPage++;
        this.cacheService.currentFilter = "";
        this.loadPeople(this.apiService.nextPageUrl as string);
    }

    loadPreviousPeople(): void {
        if (!this.hasPrevious) return;
        this.cacheService.currentPage--;
        this.cacheService.currentFilter = "";
        this.loadPeople(this.apiService.previousPageUrl as string);
    }

    displayDetail(person: Person): void {
        console.warn(person.name);
        const navigationExtras: NavigationExtras = {
            state: {
                person: person,
            },
        };
        this.router.navigate(["detail"], navigationExtras);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.cacheService.currentFilter = filterValue.trim().toLowerCase();
    }
}
