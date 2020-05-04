import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import {MovieServiceService} from './services/movie-service.service';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import {ReactiveFormsModule} from '@angular/forms';
import { DrawingComponent } from './drawing/drawing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewMoviesComponent,
    DisplayDetailsComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DrawingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
