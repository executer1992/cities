import * as uuid from 'uuid';
export interface City {
  CityName: string;
  CityImage: string;
  Nation: string;
  NationFlag: string;
  Population: number;
  Description: string;
  id?: uuid;
}
