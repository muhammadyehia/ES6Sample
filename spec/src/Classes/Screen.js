
let s_name=Symbol();
export  class Screen{
    constructor(name)
    {
        this[s_name]=name;
    }
    get name()
    {
        return this[s_name];
    }
    doWork(){
       return `${this.name} is Running`; 
    }
}