import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as CityActions from './city.actions';
import { CityService } from '../city.service';

@Injectable()
export class CityEffects {
  public loadCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CityActions.loadCities),
      switchMap(() =>
        this.citySrv.allCities().pipe(
          map(cities => CityActions.loadCitiesSuccess({ cities })),
          catchError(error => of(CityActions.loadCitiesFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private citySrv: CityService) {}
}
