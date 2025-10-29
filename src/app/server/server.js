import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve Angular static files
app.use(express.static(path.join(__dirname, "../../dist/know-me-if-you-can/browser")));

// API route
app.post("/save", (req, res) => {
  const file = "responses.json";

  const existing = fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, "utf8"))
    : [];

  existing.push(req.body);
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));

  res.json({ message: "Saved successfully!" });
});

// Fallback route for Angular
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/know-me-if-you-can/browser/index.html"));
});

// Use Railway port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
