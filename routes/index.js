const { Router } = require("express");
const demo = require("./demo.route").default;

const r = Router();

r.use("/demo", demo);

r.get("/", (req, res) => {
	res.json({
		success: true,
		message: "express vercel boiler plate",
		data: null,
	});
});

module.exports = r;
