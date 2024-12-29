const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
	// if (!req.headers.Authorization) {
	// 	return res.json({ msg: "Please login again" });
	// }
	const token = req.headers?.Authorization?.split(" ")[1];
	console.log(token);
	// if (token) {
	// 	try {
	// 		var decode = jwt.verify(token, process.env.SECRET_KEY);
	// 		req.body.userId = decode.userId;
	// 		next();
	// 	} catch (error) {
	// 		res.send({ msg: "Please login again" });
	// 	}
	// } else {
	// 	return res.send({ msg: "Please login first" });
	// }

	jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
		if (err) {
			res.send("Please login again");
		} else {
			req.body.userId = decoded.userId;
			next();
		}
	});
};

module.exports = { authentication };
