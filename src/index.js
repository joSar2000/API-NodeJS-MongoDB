const { app } = require('./app');
const { dbConn } = require('./database');

async function main () {
    //inicamos levantando la base de datos
    await dbConn();
    //inicamos el servidor
    await app.listen(8080);
}

main();