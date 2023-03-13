import { ErrorResponseObject } from "./common/http";
import routes from "./routes";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(helmet());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

// default catch all handler
app.all("*", (req, res) =>
	res.status(404).json(new ErrorResponseObject("route not defined"))
);

module.exports = app;
