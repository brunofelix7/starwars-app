import { Starship } from './../classes/starship';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '../classes/server-response';
import { Observable } from '../../../node_modules/rxjs';
import { Route } from '../routes/route';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) { 

  }

  public getAll(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(Route.URI_STARSHIPS);
  }

  public getById(id: string): Observable<Starship>{
    return this.http.get<Starship>(Route.URI_STARSHIPS + 0 + id);
  }

  public getStarship(url: string): Observable<Starship>{
    return this.http.get<Starship>(url);
  }

}
