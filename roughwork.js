let arr = [1, 6, 33, "afroj", 44, "ahmed"]
for (let x of arr) {
    console.log(x);
}                                                                           //for of


const person = { fname: "John", lname: "Doe", age: 25 };                       // for in
for (let x in person) {
    console.log(person[x]);
}

var arr1 = [1, 2, 4, 5, 6];
var arr2 = [2, 3, 5, 7];

// var result = [];
for (let x of arr1) {
    if (arr2.includes(x)) {
        // result.push(x);
        console.log(x)
    }
}
console.log(result);