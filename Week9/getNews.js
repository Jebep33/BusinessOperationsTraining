async function getNews(){
    const status = document.querySelector("#status");
    const list = document.querySelector("#list-posts");
    const timestamp = document.querySelector("#timestamp");

    status.textContent= "⌛ Loading content...";
    list.innerHTML = "";

    try{
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=1f09fcc27d6844f0b18e6d1c20e53584");
        const posts = await res.json();

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
        });

        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        const formattedDate = now.toLocaleDateString();

        timestamp.textContent = `Last updated: ${formattedDate} ${formattedTime}`;
        status.textContent = "✅ Latest News Loaded";
    }

    catch (err) {
        console.error("Error fetching news:", err);
        status.textContent = "⚠️ Failed to fetch news.";
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    getNews();
    setInterval(getNews, 30000);
})
