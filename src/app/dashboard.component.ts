/**
 * Created by Jackie on 2016/8/23.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-dashboard',
    templateUrl: './tpl/dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private router: Router, private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        const link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
