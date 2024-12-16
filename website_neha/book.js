// console.log('hello');
const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/services", (req, res) => {
  res.send("services page");
});
// Start the server
app.listen(3000, () => {
    // console.log(`Server running at http://localhost:${port}`);
    console.log(`Server running`);
  });
















































  //rough work
// Middleware to parse JSON data
// app.use(express.json());

// // GET Route: Fetch data
// app.get('/api/users', (req, res) => {
//   // Example data
//   const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//   ];
//   res.send(users);
// });

// // PUT Route: Update a user by ID
// app.put('/api/users/:id', (req, res) => {
//   const userId = req.params.id; // Get ID from the route parameter
//   const updatedData = req.body; // Get updated data from the request body

//   // Example: Simulate updating user data
//   res.send({
//     message: User with ID ${userId} updated successfully!,
//     updatedData,
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });