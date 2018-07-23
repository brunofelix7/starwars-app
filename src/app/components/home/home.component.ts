import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { 

  }

  ngOnInit() {

  }

  public navigateToPersonagens(): void{
    this.route.navigate(['personagens'])
  }

  public navigateToPlanetas(): void{
    this.route.navigate(['planetas'])
  }

  public navigateToNaves(): void{
    this.route.navigate(['naves'])
  }

}
