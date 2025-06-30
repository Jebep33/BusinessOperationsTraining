fetch('http://127.0.0.1:5500/Contact_Viewer/data.json')
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not OK.");
        }
        return response.json();
    })
    .then(data => {
        //let input = prompt("Please provide a name.");
        const searchText = document.getElementById("searchInput");

        searchText.addEventListener("input", () => {
            try{
                const input = searchText.value.trim();
                
                if(input === ""){
                    clear();
                    return;
                }

                const cleanText = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

                console.log(cleanText);
                const found = data.users.find(user => user.name.includes(cleanText));
                
                
                if(!found){
                    clear();
                    const display = document.querySelector("#display");
                    const message = document.createElement("h3");
                    message.textContent = "Sorry! User not found.";
                    display.appendChild(message);
                    return;
                }
                printDetails(found);
            }   

            catch (e){
                console.log(e.message);
            }
            
        });
        
    })
    .catch(error =>{ 
        console.log("There was a problem.", error.message);
    });

   
function printDetails(yourData){
    var display = document.querySelector("#display");

    clear();

    let userName = document.createElement("h3");
    userName.textContent = "NAME: " + yourData.name;
    userName.className = "displayChild";

    let userEmail = document.createElement("p");
    userEmail.textContent = "Email: " + yourData.email;;
    userEmail.className = "displayChild";

    let userAddress = document.createElement("p");
    userAddress.textContent = "Address: " + yourData.address.city + ", " + yourData.address.zipcode;
    userAddress.className = "displayChild";

    display.appendChild(userName);
    display.appendChild(userEmail);
    display.appendChild(userAddress);
}

function clear(){
    display.innerHTML = "";
}
    