var hadError = false;

function divideNumber(a,b){
    return a/b;
}

try{
    const b = 50;

    if (b === 0) {
        throw new Error("Math Error: You cannot divide by zero.")
    }
    else if(isNaN(b) || isNaN(a)){
        throw new Error("Input Error: Please input numbers only.");
    }

    const result = divideNumber(a,b);
    console.log("Result:", result);
}
catch (e){
    hadError = true;
    console.error("Error:", e.message);
}
finally{
    if(hadError){
        console.log("Please try again.");
    }
    else{
        console.log("Congrats! The operation was a success.");
    }
}