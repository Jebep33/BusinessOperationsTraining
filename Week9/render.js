/* fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
        posts.forEach(post => {
            const list_posts = document.querySelector("#list-posts");
            const list = document.createElement("li");
            list.className = "post";
            list.innerHTML = post.title;
            list_posts.appendChild(list);
        });
    });*/


//async method

async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const list = document.querySelector("#list-posts");
    list.innerHTML = "";

    posts.slice(0,5).forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        list.appendChild(li);
    })
}

setInterval(loadPosts(), 10000); //calls the loadPosts() function every 10 seconds, essentially creating an automatic refresh


