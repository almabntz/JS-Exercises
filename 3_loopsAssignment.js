// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
while (i < 6 ) {
    console.log(i);
    i ++;
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let m = 1
do {
   console.log(m);
m ++;
}
while (m < 6);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let n = 1; n < 6; n++){
  console.log(n);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// WHILE LOOP 
let x = 10;
while (x > 0 ) {
    console.log(x);
   x --;
}
// DO WHILE LOOP
let y = 10
do {
   console.log(y);
y --;
}
while (y > 0);
// FOR LOOP
for (let z = 10; z > 0; z--){
  console.log(z);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//WHILE LOOP
let j = 7;
while (j < 28 ) {
    console.log(j);
    j ++;
}
// DO WHILE LOOP 
let k = 7
do {
   console.log(k);
k ++;
}
while (k < 28);
// FOR LOOP
for (let l = 7; l < 28; l++){
  console.log(l);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//WHILE LOOP
let a = 0;
while (a < 110 ) {
    console.log(a);
    a += 10;
}
// DO WHILE LOOP 
let b = 0
do {
   console.log(b);
b += 10;
}
while (b < 110);
// FOR LOOP
for (let c = 0; c < 110; c += 10){
  console.log(c);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
/* This while loop was infinite because it did not have a defined stopping point. There was a beginnig value assigned but no ending constraint.*/
let counterFour = 1;
while (counterFour < 2 && counterFour > -101) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let g = 6
for (let g = 0; g < 7; g ++){
  console.log(g);
}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

for(let k = 0; k < 101; k++){
  if(k == 6){
      console.log (k + " My Favorite Number!");
  }
  else {
    console.log (k + " Not my Favorite Number!");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

/*A for loop seems easier to control because you can input all your constraints that need to be met, and the loop will stop at a concise stopping point once the condition is met.
This seems ideal when working with a given data set. Mean while, a while loop has the possibility of being infinite. Its practicalities seem more useful in any situation where the
measure of information or data is on going and results are needed simultaneously. while and do while loops seem more mutable. */

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1 ; insideCounter--) {
    console.log("inside" + insideCounter);
  }
  console.log("***********************************");
}
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//https://stackoverflow.com/questions/12809776/can-a-for-loop-increment-decrement-by-more-than-one
//https://www.w3schools.com/jsref/jsref_dowhile.asp