import { EntityState } from '@ngrx/entity';
import { City } from './City';
import * as uuid from 'uuid';

export interface CityState extends EntityState<City> {
  selectedCityId: uuid | null;
  loading: boolean;
}
