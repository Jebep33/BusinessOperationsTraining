let a = 1;
let b = "Test";

function divideNumbers(){
    return a/b;
}

try{
    var res = divideNumbers();

    if (b === 0){
        throw new Error("Math error: Cannot divide by zero.");
    }
    else if(isNaN(divideNumbers(a,b))){
        throw new Error("Input error: Please input a number.");
    }

    console.log(res);
}
catch(e){
    console.log(e);
}
/*finally{
    console.log("Please try again.");
}*/
