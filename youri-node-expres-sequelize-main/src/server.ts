import express, { Application } from "express";
import { Skipper } from "./data/models/skipperTable";
import {
  getAllSkippers,
  getSkippersFromDBWithID,
  updateSkipperWhereID,
} from "./data/sequelize-repository/skipperRepository";
import { sequelize } from "./util/sequelize-db-config";

/**
 * @author Youri Janssen
 * @description This is the main file of the application.
 * @functionality1 The middleware is set up.
 * @functionality2 The routes are defined.
 * @functionality3 The server is started.
 */

const app: Application = express();

const server = app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize.addModels([Skipper]);
sequelize.sync();

app.get("/skipper", async (req, res) => {
  res.json(await getAllSkippers());
});

app.get("/skipper/getwithId/:id", async (req, res) => {
  res.json(await getSkippersFromDBWithID(req.params.id));
});

app.put("/skipper/update", async (req, res) => {
  await updateSkipperWhereID(req.body);
  res.status(200).end();
});
