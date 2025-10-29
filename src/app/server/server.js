import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// ✅ API route
app.post("/save", (req, res) => {
  const file = path.join(__dirname, "responses.json");
  const existing = fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, "utf8"))
    : [];
  existing.push(req.body);
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.json({ message: "Saved!" });
});

// ✅ Serve Angular build
const angularDistPath = path.join(__dirname, "../../../dist/know-me-if-you-can/browser"); // adjust if your build path differs
app.use(express.static(angularDistPath));

// ✅ Catch-all route for Angular (Express 5 fix)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(angularDistPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
