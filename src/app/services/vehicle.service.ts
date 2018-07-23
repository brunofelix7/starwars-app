import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '../classes/server-response';
import { Route } from '../routes/route';
import { Observable } from '../../../node_modules/rxjs';
import { Vehicle } from '../classes/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(Route.URI_VEHICLES);
  }

  public getById(id: string): Observable<Vehicle>{
    return this.http.get<Vehicle>(Route.URI_VEHICLES + 0 + id);
  }

  public getVehicle(url: string): Observable<Vehicle>{
    return this.http.get<Vehicle>(url);
  }

}
