import { PlanetComponent } from './components/planet/planet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personagens', component: PeopleComponent },
  { path: 'personagens/:id', component: PeopleDetailsComponent },
  { path: 'planetas', component: PlanetComponent },
  { path: 'planetas/:id', component: PlanetDetailsComponent },
  { path: 'naves', component: StarshipComponent },
  { path: 'naves/:id', component: StarshipDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
