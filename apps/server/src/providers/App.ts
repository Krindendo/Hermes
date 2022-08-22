import Express from "./Express";

class App {
  public static loadServer(): void {
    Express.init();
  }
}

export default App;
