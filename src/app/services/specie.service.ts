import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerResponse } from '../classes/server-response';
import { Route } from '../routes/route';
import { Specie } from '../classes/specie';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(private http: HttpClient) { 

  }

  public getAll(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(Route.URI_SPECIES);
  }

  public getById(id: string): Observable<Specie>{
    return this.http.get<Specie>(Route.URI_SPECIES + 0 + id);
  }

  public getSpecie(url: string): Observable<Specie>{
    return this.http.get<Specie>(url);
  }
  
}
