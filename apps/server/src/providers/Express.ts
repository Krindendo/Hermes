import express from "express";
import Routes from "./Routes";

class Express {
  public express: express.Application;
  constructor() {
    this.express = express();

    this.mountRoutes();
  }

  private mountRoutes(): void {
    this.express = Routes.mountApi(this.express);
  }

  public init(): any {
    const port = 3001;

    this.express
      .listen(port, () => {
        return console.log(
          "\x1b[33m%s\x1b[0m",
          `Server :: Running @ 'http://localhost:${port}'`
        );
      })
      .on("error", (_error) => {
        return console.log("Error: ", _error.message);
      });
  }
}

export default new Express();
