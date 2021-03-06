const publicationModel = require('../models/publicationModel');

class PublicationService {

    PublicationService() {}

    async consultarPublicaciones () {
        try {
            return await publicationModel.find();
        } catch (error) {
            return error;
        }
    }

    async guardarPublicaciones (publication = new publicationModel()) {
        try {
            var publicacionGuardada;
            await publicationModel.create(publication).then((value) => {
                publicacionGuardada = value;
            });
            return publicacionGuardada;
        } catch (error) {
            console.log(error);
        }
    }

    async eliminarPublicaciones(idc){
        console.log(idc);
        var publicacionEliminada;
        try {
            await publicationModel.findByIdAndRemove({
                _id: idc,
            }).then((value) => {
                console.log(value);
                publicacionEliminada = value;
            });
            return publicacionEliminada;
        } catch (error) {
            console.log(error);
        }
    }

    async modificarPublicaciones (publicationEdited){
        var publicaciĆ³nModificada;
        try {
            await publicationModel.findOneAndUpdate({
                _id: publicationEdited._id
            }, publicationEdited).then ((value) => {
                publicaciĆ³nModificada = publicationEdited;
            });
            return publicaciĆ³nModificada;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new PublicationService();
    
