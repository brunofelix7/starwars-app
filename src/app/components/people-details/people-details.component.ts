import { Vehicle } from './../../classes/vehicle';
import { VehicleService } from './../../services/vehicle.service';
import { Specie } from './../../classes/specie';
import { SpecieService } from './../../services/specie.service';
import { PlanetService } from './../../services/planet.service';
import { Planet } from './../../classes/planet';
import { Film } from './../../classes/film';
import { People } from './../../classes/people';
import { FilmService } from './../../services/film.service';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Starship } from '../../classes/starship';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  public id: string;
  public films: Array<Film>;
  public species: Array<Specie>;
  public vehicles: Array<Vehicle>;
  public starships: Array<Starship>;
  public planet: Planet;
  public people: People;
  public subscribe: Subscription;

  constructor(private peopleService: PeopleService, 
              private filmService: FilmService, 
              private planetService: PlanetService,
              private specieService: SpecieService,
              private vehicleService: VehicleService,
              private starshipService: StarshipService,
              private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['id'];
    this.people = new People();
    this.planet = new Planet();
    this.films = new Array<Film>();
    this.species = new Array<Specie>();
    this.vehicles = new Array<Vehicle>();
    this.starships = new Array<Starship>();
   }

  ngOnInit() {
    this.findOne();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private findOne(): void{
    this.subscribe = this.peopleService.getOne(this.id).subscribe(
      data => {
        this.people = data
        this.getFilms(this.people.films);
        this.getPlanet(this.people.homeworld);
        this.getSpecie(this.people.species);
        this.getVehicle(this.people.vehicles);
        this.getStarship(this.people.starships);
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

  private getPlanet(url: string): void{
    this.subscribe = this.planetService.getPlanet(url).subscribe(
      (data) => {
        this.planet = data;         
    });
  }

  private getSpecie(urls: string[]): void{
    urls.forEach(url => {
      this.subscribe = this.specieService.getSpecie(url).subscribe(
        (data) => {
          let specie: Specie = data;         
          this.species.push(specie);
      });
    });
  }

  private getVehicle(urls: string[]): void{
    urls.forEach(url => {
      this.subscribe = this.vehicleService.getVehicle(url).subscribe(
        (data) => {
          let vehicle: Vehicle = data;         
          this.vehicles.push(vehicle);
      });
    });
  }

  private getStarship(urls: string[]): void{
    urls.forEach(url => {
      this.subscribe = this.starshipService.getStarship(url).subscribe(
        (data) => {
          let starship: Starship = data;         
          this.starships.push(starship);
      });
    });
  }

}
