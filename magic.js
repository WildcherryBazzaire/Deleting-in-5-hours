var hero = "Dylan Klebold";
var gender = "apoche";
var age = 21;
var weapon = "Maxwell's Silver Hammer";
var pronoun = null;

//pronoun conditional
if(gender == "male")
  pronoun = "he";
else if(gender == "female")
  pronoun = "she";
else if(gender == "apoche")
  pronoun = "shlee";

  //age conditional
var ageContext = function(aged) {
  if(aged < 18)
    return "it is just the beginning";
  else if(aged >= 21 && age <=40)
    return "has seen a few battles";
  else if(aged > 40)
    return "has lived through many epic battles";
}

//sentence
console.log(hero + " is a lovable hero, who " + ageContext(age) + " with his trusty " + weapon);

//1 fish 2 fish
var count;
var animal = "Walrus";

var animalHouse = function(k,l) {
  count = k+l;
}
animalHouse(23,46);
console.log(count);

//1 fish 2 fish countinued 
if(count > 2)
  console.log("We have many Elephants");
else
  console.log("Welcome to the Jungle");

//Assembling the Avengers
var hero = "Muammar Gaddafi";

var avengersAssemble = function(avenger) {
  if(avenger == "Iron Man")
    console.log("Man in Tin Can");
  else if(avenger == "Hulk")
    console.log("Big Green Pea");
  else if(avenger == "Black Widow")
    console.log("Important love interest")
  else if(avenger == "Hawkeye")
    console.log("Hawk Garbage");
  else if(avenger == "Muammar Gaddafi")
    console.log("Mad Dog of the Middle East");
}

avengersAssemble(hero);

//lights out baby

var lights = true;

if(lights)
  console.log("is this what you wanted to see?")
else
  console.log("No more bright lights...");

//Vroom vroom
var carType = "Lotus";
color = "Honey Yellow";

var shipment = (car,color) => {
  car.toLowerCase();
  color.toLowerCase();
  if(car + " " + color == "blue toyota")
    console.log("We have your " + color + " " + car);
  else if(car + " " + color == "black tesla")
    console.log("We have your " + color + " " + car);
  else if(car + " " + color == "red lamborgini")
    console.log("We have your " + color + " " + car);
  else
    console.log("We have your " + color + " " + car);
}

shipment(carType,color);