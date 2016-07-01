export default class Car{
    constructor(name)
    {
        this._name=name;
    }
    get name()
    {
        return this._name;
    }
    doWork(){
       return `${this.name} is Running`; 
    }
}