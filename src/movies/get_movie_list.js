const mongoConnection=require(__dirname+'../../../config/mongo_config.js');
// const { ObjectId } = require('mongodb');

async function main(req, res) {
        try {
        const db = await mongoConnection.main();
        console.log(db);
        let data = await db.collection('movies').find().toArray();
        res.json(data);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
          }
        };

  module.exports = {
    main: main
}




