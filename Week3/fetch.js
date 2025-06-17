fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  })
  .then(data => {
    const titles = data.map(post => post.title);
    titles.forEach(title => console.log(title));
  })
  .catch(error => {
    console.error("There was a problem:", error);
  });

