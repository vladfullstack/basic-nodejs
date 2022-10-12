const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

app.get("/node1", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: "reply from node server one",
    },
  });
});

app.get("/node2", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: "reply from node server two",
    },
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on this port ${PORT}`));
