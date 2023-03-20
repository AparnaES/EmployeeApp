import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cdate:any
  constructor(private ds: DataService, private fb: FormBuilder, private rout: Router) {
    this.cdate=new Date

   }

  // EmployeeDatails:any={
  //   1:{Empname:"Anu",Empid:1,Empdesig:"tester",Empsal:25000,Empexp:2},
  //   2:{Empname:"Anupama",Empid:2,Empdesig:"developer",Empsal:25000,Empexp:0},
  //   3:{Empname:"Anuja",Empid:3,Empdesig:"tester",Empsal:25000,Empexp:1},
  //   4:{Empname:"Anju",Empid:4,Empdesig:"developer",Empsal:25000,Empexp:3},
  // }
  searchForm = this.fb.group({
    Eid: ["", [Validators.required, Validators.pattern('[0-9]+')]]
  })

  searchEmployee() {
    var eid = this.searchForm.value.Eid
    if (this.searchForm.valid) {
      const result = this.ds.searchEmployee(eid)
      if (result) {

        alert("Employee is present")
        console.log(result);

        this.rout.navigateByUrl("")
      } else {
        alert("Employee not present")

      }

    } else {
      alert("Invalid Form")
    }

  }
}
