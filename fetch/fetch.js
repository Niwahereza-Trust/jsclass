// Step 1: Ask for the data
fetch("https://jsonplaceholder.typicode.com/users")

  // Step 2: Wait for the server to respond and convert it to JSON
  .then(response => response.json())

  // Step 3: Work with the data
  .then(users => {
    console.log("List of users:", users);

    // Example: show just their names
    users.forEach(user => {
      console.log("User name:", user.name);
    });
  })

  // Step 4: Handle any errors
  .catch(error => {
    console.error("Something went wrong:", error);
  });

