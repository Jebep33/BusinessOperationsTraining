
    fetch("https://rottentomato.p.rapidapi.com/search?search-term=kin", {
        headers: {  'x-rapidapi-key': '4d20401f36mshbd26844ce01297fp1f13c1jsn72f4b473e0fc',
                    'x-rapidapi-host': 'rottentomato.p.rapidapi.com'
        }
    })
        .then(res => {
            if (!res.ok)
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            return res.json();
        })
        .then(data => console.log("Movie Data:", data))
        .catch(err => console.error("Request Failed:", err.message));
