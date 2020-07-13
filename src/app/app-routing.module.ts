import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BirdListComponent } from './birds/bird-list/bird-list.component';
import { NaturalReserveListComponent } from './natural-reserves/natural-reserve-list/natural-reserve-list.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'birds', pathMatch: 'full', component: BirdListComponent },
  { path: 'natural-reserves', pathMatch: 'full', component: NaturalReserveListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
