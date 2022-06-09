// Create a new object which will have all the properties of given object person and student

const person ={
    id:2,
    gender:"mail"
}

const student={
    name:"ravi",
    email:"ravi@yopmail.com"
}

// 1st way prototype and Object.create

const combine = Object.create(person)

combine.Prototype = student;
console.log(combine.id,combine.gender,combine.Prototype.name,combine.Prototype.email)



// 2nd using Object.assign method

const combineSecond = Object.assign(person,student)
console.log(combineSecond)

// 3rd using es6 feature spread

const combineThird = {...person, student}

console.log(combineThird)