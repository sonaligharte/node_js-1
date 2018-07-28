console.log("Hello Sonali...");

var name = "Sonali";

var lName = "Gharte"

var fName = name + lName;

fName

console.log(fName);


var userNameFbWebReq = "Sonali@gmail.com";

// fB server side code....

var userNameFBSonaliDB = "Sonali@gmail.com"


if(userNameFbWebReq == userNameFBSonaliDB){

  console.log("Hurrey! Hi Sonali!!");
}else{

  console.log("Username does not match....");
}



// comparison using == and ===
/// what is dif between == and ===?

var number = 1; // its datatype is number

var string_1 = '1'; // its datatype is String
var equality_using_double = number == string_1;
var equality_using_tripple = number === string_1;
// console.log("Comparison using == ", number == string_1); // true;
console.log("Comparison using == ", equality_using_double); // true;
// console.log("Comparison using === ", number === string_1); // true;
console.log("Comparison using === ", equality_using_tripple); // true;

// Object :
// ways to define Object.
var obj = {};
var obj = new Object();
obj = {"name":"Sonali"};// key == name and value == Sonali....: This is called as object literal...
obj = {name, lName}; // {"name":"Sonali", "lName":"Gharte"}


// how to add properties to an object?
// below are the ways...
// obj["fName"] = "Sonali Gharte";//

obj['fName'] = name + " " + lName;//
obj["salary"] = 20000;



console.log("Object is :: ", obj);

var space_add = name + " " + lName;

console.log("space_add :: ", space_add);


// accessing propertis of a object....
var value_present_against_name = obj['name'];

console.log("value_present_against_name :: ", value_present_against_name);


// Array : datatype
// it holds multiple elements...
// elements meaning: any other datatype... string, number, Object, Array.
// Array are ordered collection..... meaning:  insertion order of values are maintained....
// How to define Array

var arr = [];
arr = new Array();
//indexPos:0,1,2,3,4....n
arr = ["1", 1, "2", 2, "Three", "3"];

// console.log("Array :: ", arr);
// insert another elements to an array..

arr.push("pushing new elements...... ");
arr.push(obj);

console.log("Array :: ", arr);


// how to access......

var zeroth_index_element = arr[0];
var first_index_element = arr[1];

console.log("Zeroth element inside arr:  " , zeroth_index_element, typeof(zeroth_index_element));
console.log("first_index_element inside arr:  " , first_index_element, typeof(first_index_element));


var arr_1 = new Array(5);

console.log("undefined elements inside arr_1 :: ", arr_1);
var arr_1 = new Array(5, 3,"Abcd", "efgh", "fifth" ,"sixth");
console.log(" elements inside arr_1 :: ", arr_1);

// Iteration::: on Array:
console.log("How top find length of array :: ", arr_1.length);

// for loop
for(var index = 0; index < arr_1.length; index++){

  // console.log("Printing array elements at index :: " + i  + " -- actual element is :: ", arr_1[i]);
  //console.log("Hi Sonali");
  //console.log(i);
  console.log(arr_1[index]);
}

// for using in operator...

for(var index in arr_1){

  console.log("in operator :: ", index, arr_1[index]);

}

// for using of operator. ECMA-6

for(var item of arr_1)
{

  console.log("of operator :: ", item);

}


// object iterations....
var obj = {"name":"Sonali", "fName":"Gharte", "Salary":"20000"}

var value_of_key_name = obj['name'];


for(var key in obj){

  console.log("Keys and values inside object are :: ", key, obj[key]);

}

// changes in file
console.log("Hello");

var name = "Sonali";
var lName = "Gharte";
var fName = name + lName;
fName;
console.log(fName);
var i =30.50;
typeof(i);
var x = 1/0;
console.log(x);
var number = 1;
var string = '1';
var equality_using_double = number == string;
var equality_using_tripple = number === string;
console.log("Comparison using == ", equality_using_double);
console.log("Comparison using === ", equality_using_tripple);
// Object :
var obj = {name,lName};
obj['fName'] = name + " " + lName;
obj['salary'] = 20000;
obj['age'] = 22;
obj['address'] = 'Keshav Nagar';
console.log("object is:", obj);
var space_add = name + " " + lName;
// Array :
var arr = [110,20,"priyanka",30,"piyush"];
//console.log("Array :", arr);
arr.push(55,10);
//console.log("Array :", arr);
arr.push(name,number,string);
console.log("Array :", arr);
var zeroth_index_element = arr[0];
var nineth_index_element = arr[9];
console.log("Zeroth Element :", zeroth_index_element, typeof(zeroth_index_element));
console.log("Nineth Element :", nineth_index_element, typeof(nineth_index_element));
console.log("Length of Array :", arr.length);
for(var index = 0; index < arr.length; index++)
  {
    //console.log("Printing Array Elements At Index :" + index + " " + "Actual Elements is :", arr[index]);
    //  console.log("Hi")
    console.log(arr[index]);
  }
  // for using in operator

   for(var index in arr)
   {
     //console.log("in operator :", index, arr[index]);
     console.log("in operator :", arr[index]);

   }

  // for using of operator:

   for(var item of arr)
   {
     console.log("of operator:", item);
   }

   // object iterations:
    var obj = {"name":"Sonali", "fName":"Gharte", "age":"22"}
    var value_of_key_name = obj['age'];
    for(var key in obj)
    {
      //console.log("Keys and values inside object are:", key, obj[key]);
      console.log("Values inside object are:", obj[key]);

    }

