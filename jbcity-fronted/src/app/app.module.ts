import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {Hero} from './hero/hero.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component'
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./routing/app-routing.module";
import {HttpModule} from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./in-memory-data/in-memory-data.service";
import { HeroSearchComponent } from './hero-search/hero-search.component';



@NgModule({
    declarations: [
        AppComponent,
        Hero,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),



    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule {

}
