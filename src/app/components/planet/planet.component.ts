import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Router } from '@angular/router';
import { ServerResponse } from '../../classes/server-response';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  public response: ServerResponse;
  public subscribe: Subscription;
  public loading: string;
  public id: string;

  constructor(private planetService: PlanetService, private route: Router) { 
    this.loading = 'Carregando...';
  }

  ngOnInit() {
    this.findAll();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private findAll(): void{
    this.subscribe = this.planetService.getAll().subscribe(
      data => {
        this.response = data
      }
    );
  }

  public getUrl(url: string): void{
    this.id = url.replace(/\D/g,'');
    this.route.navigate([`planetas/${this.id}`])
  }

}
