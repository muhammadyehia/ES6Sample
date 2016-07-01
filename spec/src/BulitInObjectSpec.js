describe("object", function(){
    describe("is function", function(){
    it("should consider positiv and negative zero to be different ",function () {
      expect (-0===0).toBe(true);
      expect (Object.is(-0,0)).toBe(false);
    })
    
    
      it("should consider NaN to be NaN",function () {
      expect (NaN===NaN).toBe(false);
    expect (Object.is(NaN,NaN)).toBe(true);
    })
});

describe("assign function", function(){
  it(' should apply mixing to objects',function () {
      let shark={
          bite:function (target) {
              target.hurt=true;
          }
      }
      let person ={};
      let laser1={
          pewpew1:function (target) {
              target.exploded1=true;
          }
      }
         let laser2={
          pewpew2:function (target) {
              target.exploded2=true;
          }
      }
      Object.assign(shark,laser1,laser2);
      shark.pewpew1(person);
      shark.pewpew2(person);
      expect(person.exploded1).toBe(true);
      expect(person.exploded2).toBe(true);
      
  });
describe("property intializer shorthand", function(){
    it(" should create properties from local variables",function () {
       let model='ford';
       let year=2016;
       var classic={
           model,year
       }
       expect(classic.model).toBe('ford');
          expect(classic.year).toBe(2016);
    });
    
    
});


describe("method  intializer shorthand", function(){
    
    it(' should create  method using  shorthand',function () {
    let server={
        getPort()
        {
            return 8080;
        }
    }
    expect(server.getPort()).toBe(8080)
      
  });
}
);



describe("computed property names", function(){
    
    it(' should support variable for property names',function () {
    let createSimpleObject=function (propertyName,propertyValue) {
        return {
            [propertyName]:propertyValue
        }
    }
    let result=createSimpleObject('color','red');
    expect(result.color).toBe('red');
      
  });
    it(' should support concatenation',function () {
    let createTriumvirate=function (first,second) {
        return {
            ['member_'+first.name]:first,
            ['member_'+second.name]:second,
        }
    }
    let muhammad={name:"muhammad"};
     let yehia={name:"yehia"};
    let result=createTriumvirate(muhammad,yehia);
    expect(result.member_muhammad).toBe(muhammad);
         expect(result.member_yehia).toBe(yehia);
  });
}
);
});
});