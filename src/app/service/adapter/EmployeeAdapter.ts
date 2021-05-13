import { Injectable } from '@angular/core';

import { Employee } from 'src/app/model/Employee';
import { Adapter } from '../../model/Adapter';

@Injectable({
	providedIn: 'root'
})
export class EmployeeAdapter implements Adapter<Employee> {
	adaptRequest(emp: Employee): any {
		let _emp = {
			firstName: emp.firstName || '',
			lastName: emp.lastName || '',
			email: emp.emailAddress || '',
			id: emp.employeeId || 0
		};

		return _emp;
	}

	adaptResponse(data: any): Employee {
		let emp = new Employee();

		emp.employeeId = data.id || 0;
		emp.firstName = data.firstName || '';
		emp.lastName = data.lastName || '';
		emp.emailAddress = data.email || '';
		
		return emp;
	}
}
