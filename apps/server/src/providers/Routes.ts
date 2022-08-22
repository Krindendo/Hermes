/* eslint class-methods-use-this: "warn" */

import { Application } from "express";

import router from "../routes";

class Routes {
  public mountApi(_express: Application): Application {
    return _express.use(router);
  }
}

export default new Routes();
