import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TableComponent } from "./table/table.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { MaterialModule } from "./shared/material.module";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { CacheService } from "./services/cache.service";

@NgModule({
    declarations: [AppComponent, TableComponent, PersonDetailComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
    ],
    exports: [],
    providers: [ApiService, CacheService],
    bootstrap: [AppComponent],
})
export class AppModule {}
