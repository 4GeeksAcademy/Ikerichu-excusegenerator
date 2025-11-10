import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Reusable
function randomStringInArray(array){
  const string = array[Math.floor(Math.random() * array.length)];
  return string;
}

//Reusable
function randomExcuseGenerator() {
  //write your code here
  console.log("Generando una excusa");

  const arrayWho = ["The dog", "My grandma", "His turtle", "My bird"];
  const arrayAction = ["ate", "peed", "crushed", "broke"];
  const arrayWhat = ["my homework", "the keys", "the car"];
  const arrayWhen = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];
  
  const randomWho = randomStringInArray(arrayWho);
  const randomAction = randomStringInArray(arrayAction);
  const randomWhat = randomStringInArray(arrayWhat);
  const randomWhen = randomStringInArray(arrayWhen);

  //Mejor lectura de suma de strings
  const randomExcuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  document.getElementById("excuse").innerHTML = randomExcuse;
};

window.onload = randomExcuseGenerator();

