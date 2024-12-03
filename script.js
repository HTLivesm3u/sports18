//  let marks =[
//     97,82,87,62,90
//  ];
// for (let index = 0; index < marks.length; index++) {
//   console.log(marks[index]);
// };
// let sum = 0;

// for(let val of marks){
//       sum = sum+val;
// };
// let avg = sum / marks.length;
// console.log("avg of marks is =",avg);

// let items = [250,645,300,900,50];
// let i = 0;

// for(let val of items ){
//       let offer = val / 10;
//       items[i] = items[i] - offer;
//       console.log(`value after offer is ${items[i]}`)
//       i++;
// };

// let marvelHeros =["spiderman","Drstrange","ironman","superman","batman"];


// console.log(marvelHeros);
// console.log(marvelHeros.slice(1,2));


// let a = prompt("Enter your favorite color"); // Prompt user input

// document.body.style.backgroundColor = a; // Change the background color to user input
// let color = ["blue","red"]; // Define the color for comparison

// // Compare input with color (case-insensitive)
// if(document.body.style.backgroundColor != color) {
    // };
    // console.log("Error: The background color is not blue.");
    

let a = prompt("Enter your favorite color"); // Prompt user input

document.body.style.backgroundColor = a; // Change the background color to user input

// Define an array of valid colors
let validColors = ["blue", "red", "black", "green","yellow","pink","orange","purple","brown","white","gray"];

// Check if the user's input matches any of the valid colors (case-insensitive)
if (!validColors.includes(a.toLowerCase())) {
    document.body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/stamp-text-not-valid-inside-illustration-not-valid-108748670.jpg') height=30px";
} else {
    document.write("<h1>Your Favorite is "+ a );
}


// console.log("Error: The entered color is not a valid option.");
// console.log(`Background color changed to ${a}.`);
