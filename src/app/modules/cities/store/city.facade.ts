import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../core/interface/City';
import { CityService } from '../city.service';
import { CityState } from '../core/interface/CityState';
import { getAllCities } from './cityselectors';
import * as CityActions from './city.actions';

@Injectable()
export class CityFacade {
  public cities$: Observable<City[]> = this.store.select(getAllCities);
  private removePopulationCounter: number = 5000000;
  private addPopulationCounter: number = 1000000;
  constructor(private cityService: CityService, private store: Store<CityState>) {}

  public getCities() {
    this.store.dispatch(CityActions.loadCities());
  }

  public removeCityPopulation(city: City) {
    const populationNumber = city.Population - this.removePopulationCounter;
    this.store.dispatch(CityActions.removeCityPopulation({ city, populationNumber }));
  }

  public addCityPopulation(city: City) {
    const populationNumber = city.Population + this.addPopulationCounter;
    this.store.dispatch(CityActions.removeCityPopulation({ city, populationNumber }));
  }
}
