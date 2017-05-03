/**
 * Created by admin on 2016/7/27.
 */
import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id:number) {
        return this.getHeroes().then(heros => heros.find(hero=> hero.id == id))
    }
}

