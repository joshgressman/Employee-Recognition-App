import { Component, OnInit } from '@angular/core';
import { AwardsService } from '../services/awards.service';

import { Awards } from '../models/awards.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   award: Awards[] = [];
  constructor(private awardService: AwardsService) { }



  //get current awards upon load
  ngOnInit() {
   this.awardService.getAllAwards()
   .subscribe(
     (response) => {
       this.award = response;
       console.log("awards", this.award);
     }
   )
  }

}
