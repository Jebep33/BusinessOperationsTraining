const contacts =
    [{
        name: "Jerome",
        countryCode: "+63",
        phoneNumber: "953-578-6333"
    }
    ,
    {
        name: "Ethan",
        countryCode: "+63",
        phoneNumber: "995-911-7924"
    }];


const jsonString = JSON.stringify(contacts);
console.log(jsonString);
console.log(JSON.parse(jsonString));

const phoneNumbers = contacts.map(contact => contact.phoneNumber);
console.log(phoneNumbers);