const { Schema, model } = require('mongoose');
const publicationSchema = new Schema((
    {
        title: {           
            type: String,
            required: true,
            trim: true
        },
        body: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim : true,         
        },
        tags: {
            type: String,
            required: true,
            trim : true
        },
    }
));


module.exports = model("Publications", publicationSchema);