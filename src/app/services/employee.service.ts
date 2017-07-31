import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Employee } from '../admin/employee.model';

@Injectable()
export class EmployeeService {

  constructor(private http: Http){}

   getEmployees() {
     return this.http.get('http://localhost:3000/employee')
     .map(res => res.json())
     .catch((error: Response) => {
              return Observable.throw(error.json());
          });
   }


  addEmployee(employee: Employee){
    const body = JSON.stringify(employee);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/employee', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => {
             return Observable.throw(error.json());
         });
  }

}
