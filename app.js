console.log("Hello World");
let number = 123;
console.log(number);
number = "123123";
console.log(number);

number = false;

console.log(number, addMe());
function addMe(){
    return 123 + 123;
}