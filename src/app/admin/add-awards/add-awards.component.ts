import { Component, OnInit } from '@angular/core';
import { AwardsService } from '../../services/awards.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Awards } from '../../models/awards.model';

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.css']
})
export class AddAwardsComponent implements OnInit {
    myForm: FormGroup;

  constructor(private awardsService: AwardsService) { }

  onSubmit(){
   console.log("form", this.myForm);

  }

ngOnInit(){
  this.myForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    cost: new FormControl(null, Validators.required),
});

}

}
