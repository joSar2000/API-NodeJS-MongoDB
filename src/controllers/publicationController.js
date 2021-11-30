const publicationService = require('../services/publicationServices');

const consultarPublicaciones = async(req, res) => {
    res.json(
        {
            publicaciones: await publicationService.consultarPublicaciones()
        }
    );
}

const guardarPublicaciones = async(req, res) => {
    res.json(
        {
            publicacion: await publicationService.guardarPublicaciones(req.body)
        }
    )
}

const eliminarPublicaciones = async (req, res) => {
    res.json({
        publicacion: await(publicationService.eliminarPublicaciones(req.params.id))
    })
}

const modificarPublicaciones = async (req, res) => {
    res.json({
        publicacion: await(publicationService.modificarPublicaciones(req.body))
    })
}

 module.exports = { consultarPublicaciones, guardarPublicaciones, eliminarPublicaciones, modificarPublicaciones };