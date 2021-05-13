import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { CompModalComponent } from 'src/app/modules/common/comp-modal/comp-modal.component';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empService: EmployeeServiceService) { }

  empForm!: FormGroup;
  empList : Employee[] = [];
  formInvalid: Boolean = true;
  errorMessage: String = '';

  @ViewChild('addEmployeeModal') addEmployeeModal!: CompModalComponent;

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.empService.getEmployeeList().subscribe(
			(empList: Employee[]) => {
        console.log(empList)
        this.empList = [...empList];
			},
			err => {
			}
		);
  }

  onEmployeeFormUpdate(form: FormGroup) {
    this.empForm = form;
    this.formInvalid = form.invalid;
  }

  addEmployee(){
    if(this.empForm){
      if(this.empForm.status === "VALID"){
        this.empService.addEmployee(this.empForm.value).subscribe(
          () => {
            this.closeModal();
            this.loadData()
          },
          err => {
            this.errorMessage = err.error.msg
            return throwError(err);
          }
        );
      }else{
        this.formInvalid = true;
      }
    }
    
    
  }

  deleteEmployee(id: any){
    this.empService.deleteEmployee(Number(id)).subscribe(
			() => {
        console.log("Success!");
        this.loadData()
			},
			err => {
        this.errorMessage = err.error.msg
        return throwError(err);
			}
		);
  }

  openModal(){
    this.addEmployeeModal.open()
  }

  closeModal(){
    if(this.empForm){
      this.empForm.reset()
    }
    this.errorMessage = '';
    this.addEmployeeModal.close()
  }
}
