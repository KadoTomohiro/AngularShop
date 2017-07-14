import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Wear } from './wear';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WearService {

  url = 'api/wears';
  constructor(private http: Http) { }

  getWears(): Promise<Wear[]> {
    return this.http.get(this.url)
        .toPromise()
        .then(response => response.json() as Wear[])
  }

  getCategoryWears(category: string): Promise<Wear[]> {
    return this.getWears()
        .then(wears => wears.filter(wear => wear.category === category));
  }

  getWear(name: string): Promise<Wear> {
    return this.http.get(`${this.url}/${name}`)
        .toPromise()
        .then(response => response.json() as Wear);
  }

}
