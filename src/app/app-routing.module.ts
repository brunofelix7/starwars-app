import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

const routes: Routes = [
  { path: 'personagens', component: PeopleComponent },
  { path: 'personagens/:id', component: PeopleDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
