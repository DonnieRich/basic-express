const { italianIcons: characters } = require('../data/characters')

function index(req, res) {
    res.json({
        data: characters,
        count: characters.length
    })
}

function show(req, res) {
    res.json(req.character)
}

function destroy(req, res) {
    characters.splice(req.characterIndex, 1);
    res.sendStatus(204);
}

module.exports = { index, show, destroy }