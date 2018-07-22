import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../classes/people';
import { Route } from '../routes/route';
import { ServerResponse } from '../classes/server-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { 
  
  }

  /**Retorna todas as pessoas */
  public getAll(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(Route.URI_PEOPLE);
  }

  /**Retorna uma pessoa */
  public getOne(id: string): Observable<People>{
    return this.http.get<People>(Route.URI_PEOPLE + 0 + id);
  }

}
