import { toPromise } from 'rxjs/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Crisis } from './shared/crisis.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CrisisService {
  private heroesUrl = 'api/heroes';

  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private _http: Http) { }

  CRISES: Array<Crisis> = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
  ];

  createCrisis(name: string): Promise<any> {
    let crisis = new Crisis(this.CRISES.length+1, name);
    this.CRISES.push(crisis)
    return Promise.resolve(crisis);
  }

  getCrises(): Promise<any> {
    return Promise.resolve(this.CRISES);
  }

  getCrisis(id): Promise<any> {
    return Promise.resolve(this.CRISES[id-1]);
  }

  update(crisis): Promise<any> {

    let index = this.CRISES.indexOf(crisis);
    if(~index) {
      return Promise.resolve(this.CRISES[index] = crisis);
    } else {
      return Promise.reject('Crisis does not exist!');
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);

    return Promise.reject(error.message || error);
  }

}