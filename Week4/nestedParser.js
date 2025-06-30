const fs = require('fs');
const jsonFile = fs.readFileSync("data.json","utf-8");

const data = JSON.parse(jsonFile);

try{
    const user = data.users.find(user => user.name === "Jerome");

    if (!(user)){
        throw new TypeError("User not found");
    }

    if(!(user.email)){
        throw new TypeError("Access Error: "+user.name+" has no email.");
    }

    console.log(user.name + "'s " + "email address: " + user.email);
}
catch(e){
    console.log(e.message);
}

