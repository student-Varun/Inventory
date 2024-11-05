import express from "express";

const app = express();

// Middleware to log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Proceed to the next middleware or route handler
});

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Define a route for the root URL


// Example route with query parameters
app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello, ${name}!`);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});






















