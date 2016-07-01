describe("Promises", function(){
    
    it('should execute the callback given to then', function (done) {
       let promise=new Promise(function (resolve,reject) {
           resolve();
       })
       promise.then(function () {
                 done(); 
       });
    });
           
    it('should recevie the resolved data', function (done) {
       let promise=new Promise(function (resolve,reject) {
           resolve(1);
       })
       promise.then(function (data) {
           expect(data).toBe(1);
                 done(); 
       });
        
 
    });
    
      it('should fail when  rejected ', function (done) {
       let promise=new Promise(function (resolve,reject) {
           reject(Error('oh no !'));
       })
       promise.then(function (data) {
        //success
       },function (error) {
           expect(error.message).toBe('oh no !');
                 done(); 
       });
        
 
    });
    
    
    
       it('should have a catch ', function (done) {
       let promise=new Promise(function (resolve,reject) {
           reject(Error('oh no !'));
       })
       promise.catch(function (error) {
           expect(error.message).toBe('oh no !');
                 done(); 
       });
        
 
    });
    
      it('should compose when resolve with a promise ', function (done) {
       let prePromise=new Promise(function (resolve,reject) {
           resolve(3);
       });
       
       let promise=new Promise(function (resolve,reject) {
           resolve(prePromise);
       });
       promise.then(function (data) {
           expect(data).toBe(3);
                 done(); 
       });
        
 
    });
    
     it('should have static resolve', function (done) {
       let prePromise= Promise.resolve(3);
       
       let promise= Promise.resolve(prePromise);
       promise.then(function (data) {
           expect(data).toBe(3);
                 done(); 
       });
        
 
    });
    
    
       it('should have static reject ', function (done) {
       let promise= Promise.reject(Error('oh no !'));
       promise.catch(function (error) {
           expect(error.message).toBe('oh no !');
                 done(); 
       });
        
 
    });
      it('should be  asynchronouns', function (done) {
       
       let async=false;
       let promise= Promise.resolve();
       promise.then(function (data) {
           expect(async).toBe(true);
                 done(); 
       });
        async=true;

    });
    
    let getOrder=function (orderId) {
        return Promise.resolve({userId:1});
    }
    let getUser=function (userId) {
        return Promise.resolve({companyId:1});
    }
    let getCompany=function (companyId) {
        return Promise.resolve({name:"muhammad"});
    }
    let getCourse=function (courseId) {
        let courses={
            1:{name:"course 1"},
            2:{name:"course 2"},
            3:{name:"course 3"},
        }
        return Promise.resolve(courses[courseId]);
        
    }
        it('should chain sequentially using then ', function (done) {
getOrder(3).then(function (order) {
   return getUser(order.userId);
}).then(function (user) {
    return getCompany(user.companyId);
}).then(function (company) {
    expect(company.name).toBe("muhammad");
    done();
}).catch(function (error) {
   // handerl error 
})

    });
    
          it('should execute after all promises with all ', function (done) {
 let courseIds=[1,2,3];
let promises=[];
courseIds.forEach(function (value) {
 promises.push(getCourse(value));
});
Promise.all(promises).then(function (values) {
    expect(values.length).toBe(3);
    done();
})
    });
         it('should execute after first promise', function (done) {
 let courseIds=[1,2,3];
let promises=[];
courseIds.forEach(function (value) {
 promises.push(getCourse(value));
});
Promise.race(promises).then(function (first) {
    expect(first.name).toBeDefined();
    done();
})
    });
    
});