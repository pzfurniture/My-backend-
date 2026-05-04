const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chat");
const aiRoutes = require("./routes/ai");
const videoRoutes = require("./routes/video");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/chat", chatRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/video", videoRoutes);

// ROOT
app.get("/", (req, res) => {
  res.send("Delsa Backend Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});