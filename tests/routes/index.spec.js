import app from "../../app";
import request from "supertest";

describe("Index Endpoint", () => {
	it("GET /", async () => {
		const response = await request(app).get("/");

		expect(response.status).toBe(200);
	});
});
