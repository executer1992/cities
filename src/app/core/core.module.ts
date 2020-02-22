import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { API_URL } from 'src/environments/config';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [ApiService, { provide: 'baseURL', useValue: API_URL }]
})
export class CoreModule {}
