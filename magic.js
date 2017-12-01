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
