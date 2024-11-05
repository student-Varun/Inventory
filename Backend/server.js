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
app.get("/jokes", (req, res) => {
 const jokes = 
  [
    {
      "id": 1,
      "name": "joke1",
      "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 2,
      "name": "joke2",
      "content": "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      "id": 3,
      "name": "joke3",
      "content": "Why did the math book look sad? Because it had too many problems."
    },
    {
      "id": 4,
      "name": "joke4",
      "content": "Why did the computer go to therapy? Because it had a hard drive!"
    },
    {
      "id": 5,
      "name": "joke5",
      "content": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears."
    }
  ]
  res.send(jokes);
 
});

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






















