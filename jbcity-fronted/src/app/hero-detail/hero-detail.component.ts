import 'rxjs/add/operator/switchMap';


import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero/hero.component";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HeroService} from "../hero.service";
import { Location }                 from '@angular/common';



@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name" />
            </div>
            <button (click)="save()">Save</button>
            <button (click)="goBack()">Back</button>
        </div>

    `,
    providers:[HeroService],
    styleUrls:['./hero-detail.component.css']

})
export class HeroDetailComponent implements OnInit {



    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

}
