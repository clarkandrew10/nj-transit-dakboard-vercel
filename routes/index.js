import { Router } from "express";
import { SuccessResponseObject } from "../common/http";
import server from "./server";

const r = Router();

// r.use("/190", server);

r.get("/", (req, res) => res.json(new SuccessResponseObject("😵‍💫")));

export default r;
