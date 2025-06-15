function addNumber(myArr,myNum){
    if (typeof(myNum) == int){
        myArr.push(myNum);
        return myArr;
    }else console.log("Input is not a number")
}

function reverseString(myStr){
    if (typeof(myStr) == String){
        let revString = myStr.split("").reverse().join("");
        return revString;
    }else console.log("Input is not a string!")
}

function countEven(myArr){
    var evenArr = myArr.filter(x => x%2 == 0);
    return evenArr.length;
}

var myArray = [1,2,3,4,5];
addNumber(myArray,6);
addNumber(myArray,10);
console.log(myArray);
console.log(countEven(myArray));

var myString = "Hello World";
console.log(reverseString(myString));


