function idToInt(req, res, next) {
    req.params.id = parseInt(req.params.id);
    next();
}

module.exports = idToInt