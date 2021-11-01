//  first create constructer for car 
let car =function(CarName ,speed){
     this.CarName=CarName ;
     this.speed=speed 
     this.perfomance=function(){
        return (`car name =${this.CarName} \n car speed =${this.speed}`)
     }
}
let car1 =new car('bmw',95);
let car2= new car('city' ,95);
car.prototype.acc=function(){
     this.speed+=Math.floor(Math.random()*10);
    return (`car name =${this.CarName} \n car speed =${this.speed}`)    
}
car.prototype.slow=function(){
     this.speed-=Math.floor(Math.random()*10);
     return (`car name =${this.CarName} \n car speed =${this.speed}`)
}


 console.log('car  default perfomance ')
 console.log(`${car1.CarName} performance is = ${car1.perfomance()} 
  ${car2.CarName} performance is = ${car2.perfomance()}`)
//  game logic start  here
//   which car have more speed that'll win    
// lets make tryes
function applyacc(x){   // default die roll or accelaration 
     let i=0
while (i<2){
       x.acc()
       i++;
}
}
applyacc(car1)

applyacc(car2)


 console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
 console.log('cars perfomances after default accelaratios')
 console.log(`${car1.CarName} performance is = ${car1.perfomance()} 
 ${car2.CarName} performance is = ${car2.perfomance()}`)
// difference checkers 
function diff1(){
     if(car1.speed>car2.speed){
          return (car1.speed-car2.speed)
      }
      else {
           return 0
          }
     }

function diff2(){
     if(car2.speed>car1.speed){
          return (car2.speed-car1.speed)
      }
      else{
          return 0
      }
}

 let car1win =diff1()
console.log(`${car1.CarName} accelerated  ${car1win} times `)
 let car2win =diff2() 
 console.log(`${car2.CarName} accelerated  ${car2win} times `)


 for(let i=0;i<car1win;i++){
     applyacc(car1)
      
 }
 for(let i=0;i<car2win;i++){
     applyacc(car2)
      
 }
 console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
 console.log('cars perfomances FINAL    ')
 console.log(`${car1.CarName} performance is = ${car1.perfomance()} 
 ${car2.CarName} performance is = ${car2.perfomance()}`)



//  winner
if(car1.speed>car2.speed){
     console.log(`SO WINNER IS ${car1.CarName} with SPEED of  ${car1.speed}`)

}
else{
     console.log(`SO WINNER IS ${car2.CarName} with SPEED of  ${car1.speed} `)
}