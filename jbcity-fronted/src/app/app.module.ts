import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {Hero} from './hero/hero.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component'
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./routing/app-routing.module";


@NgModule({
    declarations: [
        AppComponent,
        Hero,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,

    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule {

}
