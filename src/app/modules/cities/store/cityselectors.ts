import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CityState } from '../core/interface/CityState';
import * as fromCity from './city.reducer';

export const selectCityState = createFeatureSelector<CityState>(fromCity.cityFeatureKey);

export const getAllCities = createSelector(selectCityState, fromCity.selectAll);
