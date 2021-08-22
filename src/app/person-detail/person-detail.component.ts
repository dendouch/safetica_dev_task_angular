import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Person, PersonDetailed } from "../models/person.model";
import { Router } from "@angular/router";
import { ApiService } from "../services/api.service";
import { World } from "../models/world.model";

@Component({
    selector: "app-person-detail",
    templateUrl: "./person-detail.component.html",
    styleUrls: ["./person-detail.component.scss", "../app.component.scss"],
})
export class PersonDetailComponent implements OnInit {
    public loading: boolean = true;
    public person: Person;
    public personDetailed: PersonDetailed;
    public personHomeworld: World;

    constructor(private apiService: ApiService, private router: Router, public location: Location) {
        let navigation = this.router.getCurrentNavigation();
        if (navigation != null && navigation.extras.state) {
            this.person = navigation.extras.state.person;
        }
    }

    ngOnInit(): void {
        this.loading = true;
        this.apiService.getPerson(this.person.url).subscribe((person) => {
            this.personDetailed = person as PersonDetailed;
            this.apiService.getWorld(this.personDetailed.homeworld).subscribe((world) => {
                this.personHomeworld = world as World;
                this.loading = false;
            });
        });
    }

    getPlaceholderSource(): string {
        switch (this.personDetailed.gender) {
            case "male":
                return "https://hungrygen.com/wp-content/uploads/2019/11/placeholder-male-square.png";
            case "female":
                return "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg";
            default:
                return "https://crystalplazagroup.com/wp-content/uploads/2016/11/placeholder-635x635.jpg";
        }
    }
}
