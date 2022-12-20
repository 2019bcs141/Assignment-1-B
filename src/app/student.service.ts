import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  constructor() { }
  
  getStudent(){
    return [
      {"id": 1, "name": "Pravin", "age": 21},
      {"id": 2, "name": "Rohit", "age": 21},
      {"id": 3, "name": "Onkar", "age": 22},
      {"id": 4, "name": "Vedant", "age": 21},
      {"id": 5, "name": "Darshan", "age": 21}]
  }
}
