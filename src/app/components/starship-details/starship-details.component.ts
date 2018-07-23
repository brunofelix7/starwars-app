import { Starship } from './../../classes/starship';
import { Component, OnInit } from '@angular/core';
import { People } from '../../classes/people';
import { Film } from '../../classes/film';
import { Subscription } from '../../../../node_modules/rxjs';
import { PeopleService } from '../../services/people.service';
import { FilmService } from '../../services/film.service';
import { StarshipService } from '../../services/starship.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit {

  public id: string;
  public starship: Starship;
  public peoples: Array<People>;
  public films: Array<Film>;
  public subscribe: Subscription;

  constructor(private peopleService: PeopleService,
              private filmService: FilmService,
              private starshipService: StarshipService,
              private router: ActivatedRoute ) { 
    this.id = this.router.snapshot.params['id'];
    this.starship = new Starship();
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
    this.subscribe = this.starshipService.getById(this.id).subscribe(
      data => {
        this.starship = data
        this.getPeople(this.starship.pilots);
        this.getFilms(this.starship.films);
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
