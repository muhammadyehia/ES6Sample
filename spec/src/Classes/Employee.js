export class Employee{
    constructor(name)
    {
        this._name=name;
    }
    get name()
    {
        return this._name;
    }
    doWork(){
       return `${this.name} is working`; 
    }
}


export let muhammadEm=new Employee("muhammad");