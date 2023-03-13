const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");
const server = require("./server");

const r = Router();

r.use("/190", server);

r.get("/", (req, res) => {
	res.json(new SuccessResponseObject("😵‍💫"));
});

module.exports = r;
