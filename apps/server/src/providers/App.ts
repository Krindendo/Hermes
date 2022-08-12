import Express from "./Express";

class App {
  public loadServer(): void {
    Express.init();
  }
}

export default new App();
