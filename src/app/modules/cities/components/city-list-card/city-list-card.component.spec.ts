import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListCardComponent } from './city-list-card.component';

describe('CityListCardComponent', () => {
  let component: CityListCardComponent;
  let fixture: ComponentFixture<CityListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
