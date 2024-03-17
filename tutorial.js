/*
🚫 < v16: Fetch API not available
🧪 >= v18: Fetch API experimental
✅ v21: Fetch API stable
*/
fetch(
  "https://jsonplaceholder.typicode.com/users"
)
  // Parse the response to JSON
  .then((response) => response.json())

  // Log the data
  .then((data) => {
    console.log(data);
  })

  // Handle any errors
  .catch(function (err) {
    console.log(
      "Unable to fetch -",
      err
    );
  });
