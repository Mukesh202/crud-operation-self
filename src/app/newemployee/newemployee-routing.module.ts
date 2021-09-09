import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewemployeeComponent } from './newemployee.component';

const routes: Routes = [{ path: '', component: NewemployeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewemployeeRoutingModule { }
