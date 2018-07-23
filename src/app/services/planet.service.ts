import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '../routes/route';
import { Observable } from '../../../node_modules/rxjs';
import { Planet } from '../classes/planet';
import { ServerResponse } from '../classes/server-response';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { 

  }

  public getAll(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(Route.URI_PLANETS);
  }

  public getById(id: string): Observable<Planet>{
    return this.http.get<Planet>(Route.URI_PLANETS + 0 + id);
  }

  public getPlanet(url: string): Observable<Planet>{
    return this.http.get<Planet>(url);
  }
  
}
