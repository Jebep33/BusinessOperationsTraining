fetch("https://example.com")
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok.")
        }
        return response.json(); //converts data from JSON to JS objects
    })
    .then(data => {
        const names = data.map(user => user.name);
        names.forEach(name => console.log(name))
    })
    .catch(error => {
        console.error("There was an error.",error.message)
    })