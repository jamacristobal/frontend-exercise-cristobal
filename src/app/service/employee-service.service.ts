import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { API } from '../constant/ApiConstant';
import { Employee } from '../model/Employee';
import { ApiUtil } from '../util/ApiUtil';
import { EmployeeAdapter } from './adapter/EmployeeAdapter';


@Injectable({
	providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private api: ApiUtil,
              private adapter : EmployeeAdapter) { }

  employeeList : Employee[] = [];

  getEmployeeList(): Observable<Employee[]> {
    return this.api.getAll(API.EP_employeeList).pipe(
			map((data: any[]) =>
				data.map(emp => {
					let _empList = this.adapter.adaptResponse(emp);
					return _empList;
				})
			),
			catchError((error: HttpErrorResponse) => {
				return throwError(error);
			})
		);
  }

  addEmployee(data: Employee): Observable<any> {
		let _data = this.adapter.adaptRequest(data);

		return this.api.addEntry(API.EP_employeeAdd, _data).pipe(
			map(result => result),
			catchError((error: HttpErrorResponse) => {
				return throwError(error);
			})
		);
	}

  deleteEmployee(id: any){
    return this.api.deleteEntry(API.EP_employeeDelete, id).pipe(
			map(result => result),
			catchError((error: HttpErrorResponse) => {
				return throwError(error);
			})
		);
  }
  
}
