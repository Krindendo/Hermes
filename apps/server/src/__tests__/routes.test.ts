/* eslint-disable no-console */
import supertest from "supertest";
import App from "../providers/App";

describe("server", () => {
  it("GET /", async () => {
    await supertest(App.loadServer())
      .get("/")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ message: "Hello world :D" });
      });
  });
});
