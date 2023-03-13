// import { SuccessResponseObject, ErrorResponseObject } from "../common/http";
// import puppeteer from "puppeteer";
// import { Router } from "express";

// const r = Router();

// const getRouteData = async () => {
// 	try {
// 		// Start a Puppeteer session
// 		const browser = await puppeteer.launch({
// 			headless: true,
// 			executablePath: process.env.CHROME_EXECUTABLE_PATH,
// 			defaultViewport: null,
// 		});

// 		// Open a new page
// 		const page = await browser.newPage();

// 		// navigate to my bus site and wait for the page to load
// 		await page
// 			.goto(
// 				"https://mybusnow.njtransit.com/bustime/wireless/html/eta.jsp?route=190&direction=New+York&id=13498&showAllBusses=on",
// 				{
// 					waitUntil: "domcontentloaded",
// 				}
// 			)
// 			.then(() => {
// 				console.log("page loaded");
// 			});

// 		// Get page data
// 		const results = await page.evaluate(() => {
// 			// my bus site stores all information we need in <strong> elements
// 			const strongEle = document.querySelectorAll(".larger");

// 			// make an array from stringEle
// 			const strongEleArray = Array.from(strongEle);

// 			// put every two elements into a new object and return the array
// 			const data = strongEleArray.reduce((acc, curr, index) => {
// 				if (index % 2 === 0) {
// 					acc.push({
// 						busNumber: curr.innerText,
// 						eta: strongEleArray[index + 1].innerText,
// 					});
// 				}
// 				return acc;
// 			}, []);
// 			const updatedDate = new Date().toISOString();
// 			return {
// 				updatedDate,
// 				data,
// 			};
// 		});
// 		console.log("pulled results", results);
// 		// close browser and return results
// 		await browser.close();
// 		return {
// 			statusCode: 200,
// 			body: JSON.stringify(results),
// 		};
// 	} catch (e) {
// 		console.log(e);
// 		return {
// 			statusCode: 500,
// 			body: JSON.stringify(e),
// 		};
// 	}
// };

// r.get("/", async (req, res) => {
// 	try {
// 		const data = await getRouteData();
// 		if (data.statusCode === 200) {
// 			return res.json(new SuccessResponseObject(data.body));
// 		} else {
// 			return res.json(new ErrorResponseObject("err:" + data.body));
// 		}
// 	} catch (e) {
// 		return res.json(new ErrorResponseObject("err:" + e));
// 	}
// });

// export default r;
const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");

const r = Router();

r.get("/", (req, res) =>
	res.json(new SuccessResponseObject("demo path live 🚀"))
);

module.exports = r;
