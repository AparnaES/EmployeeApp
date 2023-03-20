import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // EmployeeDatails:any={
  //   1:{Empname:"Anu",Empid:1,Empdesig:"tester",Empsal:25000,Empexp:2},
  //   2:{Empname:"Anupama",Empid:2,Empdesig:"developer",Empsal:25000,Empexp:0},
  //   3:{Empname:"Anuja",Empid:3,Empdesig:"tester",Empsal:25000,Empexp:1},
  //   4:{Empname:"Anju",Empid:4,Empdesig:"developer",Empsal:25000,Empexp:3},
  // }
  constructor(private rout:Router , private ds:DataService,private fb:FormBuilder){

  }
  registerForm=this.fb.group({
    Ename:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    Eid:["",[Validators.required,Validators.pattern('[0-9]+')]],
    Edesig:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    Esal:["",[Validators.required,Validators.pattern('[0-9]+')]],
    Eexp:["",[Validators.required,Validators.pattern('[0-9]+')]]
  })
  addEmployee(){
    var en=this.registerForm.value.Ename
    var eid=this.registerForm.value.Eid
    var edes=this.registerForm.value.Edesig
    var esal=this.registerForm.value.Esal
    var exp=this.registerForm.value.Eexp
    if (this.registerForm.valid) {
      const result =this.ds.addEmployee(en,eid,edes,esal,exp)
      if (result) {
        alert("Registration Successfull")
      this.rout.navigateByUrl("dashboard")
      } else {
        alert("Employee already exist")
        this.rout.navigateByUrl("dashboard")

      }
      
    } else {
      alert("Invalid Form")
    }
    // alert("login success")
    // //redirection
    // this.rout.navigateByUrl("dashboard")
  }

}
