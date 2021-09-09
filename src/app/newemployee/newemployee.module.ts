import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewemployeeRoutingModule } from './newemployee-routing.module';
import { NewemployeeComponent } from './newemployee.component';


@NgModule({
  declarations: [
    NewemployeeComponent
  ],
  imports: [
    CommonModule,
    NewemployeeRoutingModule
  ]
})
export class NewemployeeModule { }
