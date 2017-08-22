import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {Hero} from "./hero.component";

describe('Hero', () => {
    let component: Hero;
    let fixture: ComponentFixture<Hero>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Hero]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Hero);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
