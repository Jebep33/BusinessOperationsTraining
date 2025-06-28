function divideNumbers(a,b){
    return a/b;
}

try{
    divideNumbers(1,"Jerome");

    if (b === 0){
        throw new Error("Math error: Cannot divide by zero.")
    }
    else if(isNaN(divideNumbers())){
        throw new Error("Input error: Please input a number.")
    }
}
catch(e){
    console.log(e);
    console.log( "You cannot divide by zero.");
}
finally{
    console.log("Please try again.");
}
