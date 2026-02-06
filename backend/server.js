const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../Kanban/.env"),
});
const app = require("./app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
