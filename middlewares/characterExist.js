const { italianIcons: characters } = require('../data/characters')

function characterExist(req, res, next) {
    const character = characters.find(c => c.id === req.params.id)
    const characterIndex = characters.findIndex(c => c.id === req.params.id)

    if (!character) {
        res.status(404);
        res.json({
            error: 404,
            message: "Personaggio non trovato"
        })
    } else {
        req.character = character
        req.characterIndex = characterIndex
        next()
    }
}

module.exports = characterExist