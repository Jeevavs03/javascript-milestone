// Arrays have a collection of in single variable

let myArray = [1,2,3,4,5]
//Array manipulation
myArray.push(7)
console.log(myArray)
//Size of array
console.log(myArray.length)

//map
myArray.map((element,index,myArray) => {
    console.log(element*2)
})

//reduce
let sum = myArray.reduce((total, num)=>total+num, 0)
 console.log(sum)
    

//filter
myArray.filter((element) => {
    console.log(element > 2);
     
})


//JSON is mostly like array but declaration is the form of object 


let preview = {

    "name" : "jeeva",
    "age" :"21"
}

//looping through the object
for (let key in preview) {
    console.log(key);
}
//adding new elements
preview.place = "Mumbai";
console.log(preview);
