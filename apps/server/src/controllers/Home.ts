class Home {
  public static index(req: any, res: any): void {
    return res.json({
      message: "Hello world :D",
    });
  }
}

export default Home;
