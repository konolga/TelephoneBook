
exports.hasAuthorization = (res, req, next) => {
    const authorized = req.profile && req.auth && req.profile === req.auth._id
    if (!authorized) {
        return res.status(403).json({
            error: "User is not authorized"
        })
    }
};



