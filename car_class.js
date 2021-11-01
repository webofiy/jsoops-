class car {
    constructor(carname ,speed ){
        this.carname=carname ;
        this.speed=speed   //default speed 
    }

    perfom(){
        return (`${this.carname} has ${this.speed}km/h speed `)
            }
    acc(){   // default accelarate 
    return this.speed+=(Math.floor(Math.random()*10))
         }

}



car1= new car('bmw ',95)
car2 =new car('civic',95)

console.log("base speed ")
console.log(car1.perfom())
console.log(car2.perfom())
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
car1.acc() // applying defaut accleration
car2.acc()  // applying defaut accleration


console.log("speed  after default acceleraton")
console.log(car1.perfom())
console.log(car2.perfom())
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')


function diffcheck1(){
    car1.speed>car2.speed;
        return car1.speed-car2.speed;
    return 0;

}
function diffcheck2(){
    car2.speed>car1.speed;
        return car2.speed-car1.speed;
    return 0;

}
let c1w = diffcheck1()
let c2w = diffcheck2()
  for (let i=0; i<=c1w;i++){
    car1.acc()
  }
  for (let i=0; i<=c2w;i++){
    car2.acc()
  }

  console.log("speed final  ")
  console.log(car1.perfom())
  console.log(car2.perfom())
  console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
  
function winner(){
if(car1.speed>car2.speed)
 return (`so winner is ${car1.carname} with ${car1.speed} km/h`)
  return(`so winner is ${car2.carname} with ${car2.speed} km/h`)
}
console.log(winner())