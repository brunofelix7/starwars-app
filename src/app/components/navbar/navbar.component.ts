import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currentUrl: string;

  /**Verifica qual rota está sendo navegada no momento */
  constructor(private router: Router) { 
    this.router.events.subscribe(( _: NavigationEnd ) => this.currentUrl = _.url);
  }
  
  ngOnInit() {
  }

}
