import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
    { path: "home", pathMatch: "full", component: TableComponent },
    { path: "detail", pathMatch: "full", component: PersonDetailComponent },
    { path: "", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
