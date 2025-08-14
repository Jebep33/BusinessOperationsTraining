const fs = require('fs');
    const jsonFile = fs.readFileSync('data.json','utf-8');

const data = JSON.parse(jsonFile);

try{
    const myData = data.users.find(user => user.id === 4);

    if(!(myData.address)){
        throw new TypeError("Access Error: This user has no address.")
    }
    else{
        console.log(myData.address.city);
    }
}
catch(e){
    console.log(e.message);
}


