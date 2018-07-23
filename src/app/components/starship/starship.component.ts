import { Component, OnInit } from '@angular/core';
import { ServerResponse } from '../../classes/server-response';
import { Subscription } from '../../../../node_modules/rxjs';
import { StarshipService } from '../../services/starship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  public response: ServerResponse;
  public subscribe: Subscription;
  public loading: string;
  public id: string;

  constructor(private starshipService: StarshipService, private route: Router) { 

  }

  ngOnInit() {
    this.findAll();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private findAll(): void{
    this.subscribe = this.starshipService.getAll().subscribe(
      data => {
        this.response = data
      }
    );
  }

  public getUrl(url: string): void{
    this.id = url.replace(/\D/g,'');
    this.route.navigate([`naves/${this.id}`])
  }

}
