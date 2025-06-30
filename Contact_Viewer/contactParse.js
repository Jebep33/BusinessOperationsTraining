fetch('data.json')
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not OK.");
        }
        return response.json();
    })
    .then(data => {
        console.log("Raw Data", data);
        const jsonData = data;
        console.log(jsonData);
    })
    .catch(error =>{
        console.error("There was a problem.", error.message);
    });