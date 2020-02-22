import { Action, createReducer, on } from '@ngrx/store';
import * as CityActions from './city.actions';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { City } from '../core/interface/City';
import { CityState } from '../core/interface/CityState';

export const adapter: EntityAdapter<City> = createEntityAdapter<City>();

export const cityFeatureKey = 'city';

export const initialState: CityState = adapter.getInitialState({
  selectedCityId: null,
  loading: false
});

const cityReducer = createReducer(
  initialState,
  on(CityActions.loadCities, state => ({ ...state, loading: true })),
  on(CityActions.loadCitiesSuccess, (state, { cities }) => {
    state = { ...state, loading: false };
    return adapter.addAll(cities, state);
  }),
  on(CityActions.loadCitiesFailure, (state, action) => ({ ...state, loading: false })),
  on(CityActions.removeCityPopulation, (state, action) => {
    return adapter.updateOne({ id: action.city.id, changes: { Population: action.populationNumber } }, state);
  })
);

export function reducer(state: CityState | undefined, action: Action) {
  return cityReducer(state, action);
}

export const getSelectedCityId = (state: CityState) => state.selectedCityId;

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
