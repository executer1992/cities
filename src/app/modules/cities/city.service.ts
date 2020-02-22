import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './../../core/api.service';
import { Injectable } from '@angular/core';
import { City } from './core/interface/City';
import * as uuid from 'uuid';

@Injectable()
export class CityService {
  private cityEndpoint: string = '';
  constructor(private api: ApiService) {}

  public allCities(): Observable<City[]> {
    return this.api
      .get(this.cityEndpoint)
      .pipe(map(data => data.cities.map(city => ({ ...city, id: new uuid() })) as City[]));
  }
}
