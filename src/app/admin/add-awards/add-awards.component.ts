import { Component } from '@angular/core';
import { AwardsService } from '../../services/awards.service';
import { NgForm } from '@angular/forms';
import { Awards } from '../../models/awards.model';

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.css']
})
export class AddAwardsComponent {

  constructor(private awardsService: AwardsService) { }

  onSubmit(form: NgForm){
    console.log("form", form.value);
  }


}
