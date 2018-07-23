/**Modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**Rotas */
import { AppRoutingModule } from './app-routing.module';

/**Componentes */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/**Service */
import { PeopleService } from './services/people.service';
import { FilmService } from './services/film.service';
import { PlanetService } from './services/planet.service';
import { SpecieService } from './services/specie.service';
import { VehicleService } from './services/vehicle.service';
import { StarshipService } from './services/starship.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    NotFoundComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PeopleService, 
    FilmService, 
    PlanetService, 
    SpecieService,
    VehicleService,
    StarshipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
