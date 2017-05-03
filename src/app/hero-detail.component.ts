/**
 * Created by admin on 2016/7/27.
 */
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HeroService} from './hero.service';

import {Hero} from './hero';
@Component({
    selector: 'app-my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id:</label>
                {{hero.id}}
            </div>
            <div>
                <label>name:</label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            <button (click)="goBack()">Back</button>
        </div>
    `
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            const id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }


    goBack() {
        window.history.back();
    }
}
