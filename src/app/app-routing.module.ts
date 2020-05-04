import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayDetailsComponent} from './display-details/display-details.component'
import {ViewMoviesComponent} from './view-movies/view-movies.component'
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {DrawingComponent} from './drawing/drawing.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'view',component:ViewMoviesComponent},
  {path:'displayDetails/:id', component:DisplayDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'draw',component:DrawingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
