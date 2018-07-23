import { Film } from './../classes/film';
import { Route } from './../routes/route';
import { ServerResponse } from './../classes/server-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { 

  }

  public getAll(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(Route.URI_FILMS);
  }

  public getById(id: string): Observable<Film>{
    return this.http.get<Film>(Route.URI_FILMS + 0 + id);
  }

  public getFilm(url: string): Observable<Film>{
    return this.http.get<Film>(url);
  }

}
