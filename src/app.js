const express = require("express");
const app = express();
require('dotenv').config();
app.get("/", (req, res) =>
  res.json({ data: "Hello Express and Prisma", status: 200 })
);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
