import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CityService } from './city.service';
import { CityFacade } from './store/city.facade';
import * as cityReducer from './store/city.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CityEffects } from './store/cityeffects';
import { CityComponent } from './container/city.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { CityListCardComponent } from './components/city-list-card/city-list-card.component';

@NgModule({
  declarations: [CityComponent, CityCardComponent, CityListCardComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature(cityReducer.cityFeatureKey, cityReducer.reducer),
    EffectsModule.forFeature([CityEffects])
  ],
  exports: [CityComponent, CityCardComponent],
  providers: [CityService, CityFacade]
})
export class CityModule {}
