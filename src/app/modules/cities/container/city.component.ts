import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CityFacade } from '../store/city.facade';
import { City } from '../core/interface/City';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  public cities$: Observable<City[]> = this.cityFacade.cities$;

  constructor(private cityFacade: CityFacade) {}

  ngOnInit(): void {
    this.cityFacade.getCities();
  }
}
