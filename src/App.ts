import sourceMapSupport from "source-map-support";
import express from "express";
import { groupedFindings } from "routes/GroupedFindingsRoute";
import { rawFindings } from "routes/RawFindingsRoute";

sourceMapSupport.install();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Heartbeat page
app.get("/", (req, res) => {
  return res.send("Hello World!");
});

// Core routes
app.get("/groupedFindings", groupedFindings);
app.get("/rawFindings", rawFindings);

export { app };
