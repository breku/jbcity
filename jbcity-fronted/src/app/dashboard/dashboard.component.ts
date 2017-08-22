import {Component, OnInit} from "@angular/core";
import {HeroService} from "../hero.service";
import {Hero} from "../hero/hero.component";

@Component({
    selector: 'my-dashboard',
    template: `
        <h3>Top Heroes</h3>
        <div class="grid grid-pad">
            <div *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]" class="col-1-4">
                <div class="module hero">
                    <h4>{{hero.name}}</h4>
                </div>
            </div>
        </div>
    `,
    providers: [HeroService],
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }

    heroes: Hero[];
}