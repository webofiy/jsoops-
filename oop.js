
function Person (fname,byr){
    this.fname=fname;
    this.byr=byr;
}

const me =new Person('waqas' ,23);

Person.prototype.addage=function()
{
   console.log(this.byr+1)
     
     };

console.log(me)
me.addage()