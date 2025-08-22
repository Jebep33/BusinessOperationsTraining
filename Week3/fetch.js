fetch("https://jsonplaceholder.typicode.com/?postId=1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    console.log("Response starts here\n");
    console.log(response);
    console.log("Response Ends here\n");
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("There was a problem:", error);
  });

