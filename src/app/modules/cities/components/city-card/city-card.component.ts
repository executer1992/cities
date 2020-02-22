import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../../core/interface/City';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCardComponent {
  @Input() city: City;
}
