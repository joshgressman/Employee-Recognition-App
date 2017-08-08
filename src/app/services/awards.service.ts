
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Awards } from '../models/awards.model';;

@Injectable()
export class AwardsService {

  constructor(private http: Http){}

  onTest(){
    alert('wards works');
  }
}
