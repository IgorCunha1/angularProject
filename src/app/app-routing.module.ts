import { CalcmeListComponent } from './calcme-list/calcme-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCalcmeComponent } from './create-calcme/create-calcme.component';

const routes: Routes = [
  {path: 'calcme', component: CalcmeListComponent},
  {path: 'create-calcme', component: CreateCalcmeComponent},
  {path: '', redirectTo: 'calcme', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
