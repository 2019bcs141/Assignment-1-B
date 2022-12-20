import { Component } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  public students: any = [];

  constructor(private _studentService: StudentService){

  }

  ngOnInit(){
    this.students = this._studentService.getStudent();
  }
}
