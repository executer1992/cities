import { createAction, props } from '@ngrx/store';
import { City } from '../core/interface/City';

export const loadCities = createAction('[City] Load Cities');

export const loadCitiesSuccess = createAction('[City] Load Cities Success', props<{ cities: City[] }>());

export const loadCitiesFailure = createAction('[City] Load Cities Failure', props<{ error: any }>());

export const removeCityPopulation = createAction(
  '[City] Remove City Population',
  props<{ city: City; populationNumber: number }>()
);

export const addCityPopulation = createAction(
  '[City] Add City Population',
  props<{ city: City; populationNumber: number }>()
);
