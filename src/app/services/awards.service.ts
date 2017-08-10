
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Awards } from '../models/awards.model';

@Injectable()
export class AwardsService {

  constructor(private http: Http){}


  addNewReward(award: Awards){
    console.log("service Hit", award);
    const body = JSON.stringify(award);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/award', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => {
             return Observable.throw(error.json());
         });

  }

  getAllAwards(){
    return this.http.get('http://localhost:3000/award')
    .map(res => res.json())
    .catch((error: Response) => {
             return Observable.throw(error.json());
         });
  }



}
