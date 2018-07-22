import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { ServerResponse } from '../../classes/server-response';
import { People } from '../../classes/people';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public response: ServerResponse;
  public subscribe: Subscription;
  public loading: string;
  public id: string;

  constructor(private service: PeopleService, private route: Router) { 
    this.loading = 'Carregando...';
  }

  ngOnInit() {
    this.findAll();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private findAll(): void{
    this.subscribe = this.service.getAll().subscribe(
      data => {
        this.response = data
      }
    );
  }

  public getUrl(url: string): void{
    this.id = url.replace(/\D/g,'');
    this.route.navigate([`personagens/${this.id}`])
  }

}
