import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { People } from '../../classes/people';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  public id: string;
  public people: People;
  public subscribe: Subscription;

  constructor(private service: PeopleService, private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['id'];
    console.log("ID: " + this.id);
   }

  ngOnInit() {
    this.findOne();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  private findOne(): void{
    this.subscribe = this.service.getOne(this.id).subscribe(
      data => {
        this.people = data
        console.log(this.people);
    });
  }

}
