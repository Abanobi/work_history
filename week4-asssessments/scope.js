/**
  In this assessment, you will be testing your knowledge of functions scopes.
*/

// What will the below functions console log?
function run1() {
    let a = 10;
    if(a > 5) {
        a = 7;
    }
    console.log(a);
}
run1()
// Answer 7;

function run2() {
    if(true) {
        const a = 5;
    }
    console.log(a);
}
run2()
// Answer =(5)

function run3() {
  const a = 2;
  if(a = 2;){
  console.log(a);
}
run3()
}
// Answer = < 3;


// What will the below functions console log? And in what order?
// ex: First => 10, Second => 4

const a = 6;
function run4() {
    const a = 7;
    console.log(a);
};

run4();

console.log(a);​
// Answer = 7;

const a = 6;
function run5() {
    const a = 7;
    function run6() {
        const a = 8;
        console.log(a);  // First =>6
    }
    run6();
    console.log(a);  // Second => 7
}
run5();
console.log(a);​  // Third =>*

// Answer = 8,7,6 ;
