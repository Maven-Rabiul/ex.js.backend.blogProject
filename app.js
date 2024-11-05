
import express from "express";
import blogRoutes from "./routes/api.js";
import SERVER_RUNNING_PORT from "./app/config/config.js";

const app = express();

app.use(express.json()); // Middleware to parse JSON requests
app.use("/api/blogs", blogRoutes); // Route grouping

app.listen(SERVER_RUNNING_PORT, () => {
    console.log("Server running on port " + SERVER_RUNNING_PORT + "...");
});