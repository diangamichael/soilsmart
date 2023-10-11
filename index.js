import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import Replicate from "replicate";
import dotenv from "dotenv";
import EventSource from "eventsource";
const apiToken = dotenv.config();
import ReplicateResponseHandler from "./app/utils/EngageUser.js";
import MarkdownIt from "markdown-it";

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware for parsing JSON data
app.use(express.json());

// Serve static files (including text.js)
app.use(express.static("app"));
app.use(express.static(path.join(__dirname, "app")));
app.use(express.static(path.join(__dirname, "app/utils")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "app/index.html");
  res.sendFile(filePath);
});

app.post("/chat", async (req, res) => {
  const userInput = req.body.message;

  const replicateHandler = new ReplicateResponseHandler();

  const prediction = await replicateHandler.getResponse(userInput);

  res.json(prediction);

  res.end();
});
