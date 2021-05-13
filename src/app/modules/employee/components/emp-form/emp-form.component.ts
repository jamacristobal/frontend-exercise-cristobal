import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit {
  @Input()
  form!: FormGroup;
  @Output() updateFormValues = new EventEmitter<any>();
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      employeeId: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      firstName: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      lastName: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      emailAddress: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'blur' })
    });
 
  }

  valueUpdated() {
    this.updateFormValues.emit(this.form);
  }

  get employeeId(): any {
    return this.form.get('employeeId');
  }

  get firstName(): any {
    return this.form.get('firstName');
  }

  get lastName(): any {
    return this.form.get('lastName');
  }

  get emailAddress(): any {
    return this.form.get('emailAddress');
  }



}
