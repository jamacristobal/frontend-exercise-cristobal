import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  @Input()
  employees!: Employee[];

  @Output() onDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteEmp(id: number){
    this.onDelete.emit(id);
  }
}
