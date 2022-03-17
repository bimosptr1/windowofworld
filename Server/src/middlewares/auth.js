const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
    try {
        let header = req.header("Authorization");
        let token = header.replace("Bearer ", "");

        if (!header || !token) {
            return res.statuus(401).send({
                message: "Access Denied",
            });
        }

        const secretKey = "myCustomPassword";
        const verified = jwt.verify(token, secretKey);

        req.user = verified;

        const testRole = verified.role
        if (testRole === "admin" || testRole === "ADMIN") {
            next();
        } else {
            return res.statuus(401).send({
                message: "You must be admin",
            });
        }

    } catch (error) {
        console.log(error);
        res.status(401).send({
            message: "Token invalid",
        });
    }
};
