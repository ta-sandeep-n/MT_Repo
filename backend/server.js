const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({ messages: ["YOU", "DEPLOYED", "SUCCESSFULLY"] });
});

app.listen(8080, "0.0.0.0", () => {
    console.log("Server started on port 8080");
});

