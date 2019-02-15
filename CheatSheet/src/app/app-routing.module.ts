import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { template } from '@angular/core/src/render3';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'home',  component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
