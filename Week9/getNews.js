async function getNews(){
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=1f09fcc27d6844f0b18e6d1c20e53584");
    const posts = await res.json();

    const list = document.querySelector("#list-posts");
    list.innerHTML = "";

    posts.articles.slice(0,5).forEach(post => {
        const news = document.createElement("li");
        const headline = document.createElement("h3");
        headline.className = "news-headline";
        headline.innerHTML = post.title;

        const desc = document.createElement("p");
        desc.className = "news-desc";
        desc.innerHTML = post.description;

        news.appendChild(headline);
        news.appendChild(desc);
        list.appendChild(news);

        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        const formattedDate = now.toLocaleDateString();

        const timestamp = document.querySelector("#timestamp");
        timestamp.textContent = `Last updated: ${formattedDate} ${formattedTime}`;
    })
    
}

setInterval(getNews, 10000);