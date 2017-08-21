import { Component, OnInit, EventEmitter } from '@angular/core';
import { AwardsService } from '../../services/awards.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

import { Awards } from '../../models/awards.model';

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.css']
})
export class AddAwardsComponent implements OnInit {
    myForm: FormGroup;



  constructor(private awardsService: AwardsService) {

  }


  onSubmit(){
  //  console.log("form", this.myForm);
  const award = new Awards(
    this.myForm.value.title,
    this.myForm.value.description,
    this.myForm.value.cost,
  );
  console.log('award', award);
  this.awardsService.addNewReward(award)
  .subscribe(
    data => console.log(data),
    error => console.log(error)
  );
  this.myForm.reset();
  }


ngOnInit(){
  this.myForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    cost: new FormControl(null, Validators.required),
});

}


// Since the documentation is pretty limited you may need to use the golf app as Ref
// or fild alt ways. You will need to upload, send to cloud, then get back and save the url to
// the mongo post route.

//Possible solution is amizon or firebase for images. The upload and the storage are two diff techs.


}
