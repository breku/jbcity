import {Component, OnInit} from "@angular/core";
import {HeroService} from "../hero.service";
import {Hero} from "../hero/hero.component";
import {Router} from "@angular/router";

@Component({
    selector: 'my-heroes',
    template: `
        <h2>My Heroes</h2>
        <div>
            <label>Hero name:</label> <input #heroName />
            <button (click)="add(heroName.value); heroName.value=''">
                Add
            </button>
        </div>
       
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
                <button class="delete"
                        (click)="delete(hero); $event.stopPropagation()">x</button>
            </li>
        </ul>
        <div *ngIf="selectedHero">
            <h2>
                {{selectedHero.name | uppercase}} is my hero
            </h2>
            <button (click)="gotoDetail()">View Details</button>
        </div>
        
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }

        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }

        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }

        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }

        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }

        .heroes .text {
            position: relative;
            top: -3px;
        }

        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    }

    constructor(private heroService: HeroService, private router: Router) {

    }

    getHeroes(): void {
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes
        );
    }


    heroes = [];

    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }


    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);

    }
}
