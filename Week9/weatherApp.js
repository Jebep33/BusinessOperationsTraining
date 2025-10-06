async function getWeather(){
        const tempDisplay = document.querySelector("#display");
        const timestamp = document.querySelector("#timestamp");

    try{
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=13.4088&longitude=122.5615&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m&timezone=Asia%2FSingapore");
        const data = await res.json();

        const unit = data.hourly_units.temperature_2m;
        const temp = data.hourly.temperature_2m[0];
        let tempString = `${temp} ${unit}`;
        
        const tempText = document.createElement("h1");
        tempText.textContent = tempString;

        if(temp > 35) tempText.style.color = "red";
        else tempText.style.color = "green";

        tempDisplay.innerHTML = "";
        tempDisplay.appendChild(tempText);

        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        const formattedDate = now.toLocaleDateString();

        timestamp.textContent = `Last updated: ${formattedDate} ${formattedTime}`;

    }
    catch(err) {
        console.error("Error fetching data:", err);
    }
}

document.addEventListener("DOMContentLoaded",() => {
    getWeather();
    setInterval(getWeather,60000);
})

