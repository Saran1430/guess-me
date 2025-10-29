import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
  const file = "responses.json";

  // Read existing data or create empty array
  const existing = fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, "utf8"))
    : [];

  // Add new response
  existing.push(req.body);

  // Save back to file
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));

  res.json({ message: "Saved successfully!" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Server running at http://localhost:3000");
});


