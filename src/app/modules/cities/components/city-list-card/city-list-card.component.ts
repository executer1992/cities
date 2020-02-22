import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { City } from '../../core/interface/City';

@Component({
  selector: 'app-city-list-card',
  templateUrl: './city-list-card.component.html',
  styleUrls: ['./city-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityListCardComponent {
  @Input() cities: City[];
}
