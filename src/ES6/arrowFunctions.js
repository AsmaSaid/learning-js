// no params
const f1 = () => {
    return 'f1'
}
//same as
const f1_1 = function () {
    return 'f1'
}

const f11 = _ => {
    return 'f11'
}

//no params and one - line statement
const f2 = () => f1();

// with params
const f3 = (a, b) => { // with params
    return (`f3 with a= ${a} and b = ${b}`);
}
const f33 = (a = 1, b = 2) => { // with params
    return (`f33 with a= ${a} and b = ${b}`);
}
const f333 = a => { // with params
    return (`f3 with a= ${a}`);
}

/* Implicit return :
 values are returned without having to use the
 return keyword.
It works when there is a one - line statement in the
*/
const f4 = () => 'f4 returned this';
const f5 = (a) => `f5 returned this with a ${a}`;
// implicit object return
const f6 = () => ({
    name: 'asma',
    age: '27'
});

const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: () => {
        return `${this.manufacturer} ${this.model}`
    }
}

var standAloneFunc = function () {
    console.log(this);
}
var standAloneFunc2 = () => {
    console.log(this);
}



/*
Arrow functions are not suited as object methods.
Arrow functions cannot be used as constructors
https://medium.freecodecamporg/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881
*/

////////////////////////////////////////////////////////////////////
/*console.log(f1());
console.log(f1_1());
console.log(f2());
console.log(f3(2, 3));
console.log(f33());
console.log(f4());
console.log(f5(4));
console.log(f6());
console.log(car.fullName());*/