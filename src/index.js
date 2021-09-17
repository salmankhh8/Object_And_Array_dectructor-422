import animals, { useAnimals } from "./data";

const [cat, dog] = animals;

// const { name: catName, sound: catSound } = cat;
// const { name = "fluffy", sound = "perf" } = cat;

// name have to match with the porperty cat

// console.log(cat);
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water } // destructuring
// } = cat;
// console.log(food);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// // CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
