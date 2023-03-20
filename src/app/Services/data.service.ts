import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
    this.getData()
   }

  EmployeeDatails:any
  Eid:any

  // EmployeeDatails:any={
  //   1:{Empname:"Anu",Empid:1,Empdesig:"tester",Empsal:25000,Empexp:2},
  //   2:{Empname:"Anupama",Empid:2,Empdesig:"developer",Empsal:25000,Empexp:0},
  //   3:{Empname:"Anuja",Empid:3,Empdesig:"tester",Empsal:25000,Empexp:1},
  //   4:{Empname:"Anju",Empid:4,Empdesig:"developer",Empsal:25000,Empexp:3},
  // }
  saveData(){
    if (this.EmployeeDatails) {
      localStorage.setItem("edata",JSON.stringify(this.EmployeeDatails))
    }
    if (this.Eid) {
      localStorage.setItem("eid",JSON.stringify(this.Eid))
    }
  }
  getData(){
    if (localStorage.getItem("edata")) {
      this.EmployeeDatails=JSON.parse(localStorage.getItem("edata") || "")
    }
    if (localStorage.getItem("eid")) {
      this.Eid=JSON.parse(localStorage.getItem("eid") || "")
    }
  }
  addEmployee(Ename:any,Eid:any,Edesig:any,Esal:any,Eexp:any){
    var edata=this.EmployeeDatails
    if (Eid in edata) {
      return false
    } else {
      edata[Eid]={Ename,Eid,Edesig,Esal,Eexp}
      console.log(edata);
      this.saveData()
      
      return true
    }
  }
  searchEmployee(Eid:any){
    var edata=this.EmployeeDatails
    if (Eid in edata) { 
      // console.log(edata[Eid]);
    
         this.saveData()
      return edata[Eid]
    } else {
      return false
    }
  }
}
