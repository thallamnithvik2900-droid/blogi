const express = require("express");

const app = express();

// Import route file from src
const postsRoutes = require("./src/routes/posts.routes");

app.use("/api/v1/posts", postsRoutes);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
