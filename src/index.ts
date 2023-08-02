import sourceMapSupport from "source-map-support";
import { loadTables, sequelize } from "db/dbConfig";
import { app } from "./App";

sourceMapSupport.install();
const PORT = 8080;

// App startup
async function main() {
  await loadTables();
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
  app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
}

main();
