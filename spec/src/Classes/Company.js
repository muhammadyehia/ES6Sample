import {Employee} from "./Employee";
export class Company{
    hire(...names)
    {
      this.Employees=names.map(n=> new Employee(n))  ;
    }
    doWork(){
        let result="";
        for(let e of this.Employees)
        {
           result+= e.doWork();
        }
        return result;
    }
}