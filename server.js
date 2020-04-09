/**
 * @file server.js
 * @class Base server file
 * @classdesc Interface to comunicate with the API.
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 */

//#region lib
import express from "express";
import bodyParser from "body-parser";
import endpoints from "./endpoint";
import cors from "cors";
import mongoose from "mongoose";
//#endregion

const app = express();
const port = process.env.PORT || 7000;

// app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// This is temporaly is just to test schema and model
// TODO:Implement graphql schema, apollo
app.use(endpoints);

const db = mongoose.connection;
mongoose.connect("mongodb://localhost:27017", {
  dbName: "covidjsni",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("|o| DATABASE connected");
  app.listen(port, () =>
    console.log(`|o| SERVER is now listening on port ${port}`)
  );
});
