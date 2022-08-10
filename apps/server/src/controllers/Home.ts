
class Home {
	public static index(req, res, next): any {
		return res.json({
			message: "Hello world :D"
		});
	}
}

export default Home;