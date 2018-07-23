import { Component, OnInit } from '@angular/core';
import { Planet } from '../../classes/planet';
import { Subscription } from '../../../../node_modules/rxjs';
import { PlanetService } from '../../services/planet.service';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { People } from '../../classes/people';
import { Film } from '../../classes/film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  public id: string;
  public planet: Planet;
  public peoples: Array<People>;
  public films: Array<Film>;
  public subscribe: Subscription;
  
  constructor(private planetService: PlanetService, 
              private peopleService: PeopleService,
              private filmService: FilmService, 
              private router: ActivatedRoute) { 
    this.id = this.router.snapshot.params['id'];
    this.planet = new Planet();
    this.peoples = new Array<People>();
    this.films = new Array<Film>();
  }

  ngOnInit() {
    this.findOne();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private findOne(): void{
    this.subscribe = this.planetService.getById(this.id).subscribe(
      data => {
        this.planet = data
        this.getPeople(this.planet.residents);
        this.getFilms(this.planet.films);
    });
  }

  private getPeople(urls: string[]): void{
    urls.forEach(url => {
      this.subscribe = this.peopleService.getPeople(url).subscribe(
        (data) => {
          let people: People = data;         
          this.peoples.push(people);
      });
    });
  }

  private getFilms(urls: string[]): void{
    urls.forEach(url => {
      this.subscribe = this.filmService.getFilm(url).subscribe(
        (data) => {
          let film: Film = data;         
          this.films.push(film);
      });
    });
  }

}
