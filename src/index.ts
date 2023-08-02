import sourceMapSupport from "source-map-support";
import express from "express";
import bodyParser from "body-parser";
import { groupedFindings } from "routes/GroupedFindingsRoute";
import { loadTables, sequelize } from "db/dbConfig";

sourceMapSupport.install();
const PORT = 8080;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("handling get");
  return res.send("Hello World!");
});

app.get("/groupedFindings", groupedFindings);

async function main() {
  await sequelize.sync({ force: true });
  await sequelize.authenticate();
  await loadTables();
  console.log("Connection has been established successfully.");
  app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
}

main();
