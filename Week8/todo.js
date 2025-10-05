// ############# ACTIVITY 1 ###############

/*fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    let incomplete = data.filter(task => task.completed === false);
    console.log("Incomplete Tasks:", incomplete);
    console.log("Number of Results: ", incomplete.length);
  });*/

// ############## ACTIVITY 2 #################

  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    let userTaskCount = {};

    data.forEach(datum => {
        userTaskCount[datum.userId] = (userTaskCount[datum.userId] || 0) + 1;
    });

    let activeUsers = Object.keys(userTaskCount).filter(userID => userTaskCount[userID] > 3); //good as await
    console.log("Users with more than 3 tasks:", activeUsers);
    console.log("User Task Counts: ", userTaskCount);

    let filteredToDos = data.filter(todo => activeUsers.includes(String(todo.userId)));
    //console.log("Number of Results:",filteredToDos.length);
    //console.log(filteredToDos);
  });

