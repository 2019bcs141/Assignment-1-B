import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    public students: any = [];

    constructor(private _studentService : StudentService){

    }

    ngOnInit(){
        this.students = this._studentService.getStudent();
    }


}
