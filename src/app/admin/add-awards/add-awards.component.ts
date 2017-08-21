import { Component, OnInit, EventEmitter } from '@angular/core';
import { AwardsService } from '../../services/awards.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

import { Awards } from '../../models/awards.model';

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.css']
})
export class AddAwardsComponent implements OnInit {
    myForm: FormGroup;

    // ng-uploader properties
    formData: FormData;
    files: UploadFile[];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;

  constructor(private awardsService: AwardsService) {
    //ngx-uploader
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  onUploadOutput(output: UploadOutput): void {
      if (output.type === 'allAddedToQueue') { // when all files added in queue
        // uncomment this if you want to auto upload files when added
        // const event: UploadInput = {
        //   type: 'uploadAll',
        //   url: '/upload',
        //   method: 'POST',
        //   data: { foo: 'bar' },
        //   concurrency: 0
        // };
        // this.uploadInput.emit(event);
      } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') { // add file to array when added
        this.files.push(output.file);
      } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
        // update current data in files array for uploading file
        const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
        this.files[index] = output.file;
      } else if (output.type === 'removed') {
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
      } else if (output.type === 'dragOver') {
        this.dragOver = true;
      } else if (output.type === 'dragOut') {
        this.dragOver = false;
      } else if (output.type === 'drop') {
        this.dragOver = false;
      }
    }

    startUpload(): void {
      const event: UploadInput = {
        type: 'uploadAll',
        url: 'http://ngx-uploader.com/upload',
        method: 'POST',
        data: { foo: 'bar' },
        // concurrency: this.formData.concurrency
      };
      console.log(event);
      this.uploadInput.emit(event);
    }

    cancelUpload(id: string): void {
      this.uploadInput.emit({ type: 'cancel', id: id });
    }

    removeFile(id: string): void {
      this.uploadInput.emit({ type: 'remove', id: id });
    }

    removeAllFiles(): void {
      this.uploadInput.emit({ type: 'removeAll' });
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
