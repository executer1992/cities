import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, MaterialModule],
  providers: []
})
export class SharedModule {}
