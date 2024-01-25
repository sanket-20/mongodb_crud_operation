const mongoConnection=require(__dirname+'../../../config/mongo_config.js');
const { ObjectId } = require('mongodb');
const { object } = require('webidl-conversions');

async function main(req, res) {
        try {
        const db = await mongoConnection.main();
        console.log(db);
        let data = await db.collection('movies').findOne({_id: new ObjectId(req.params.id)});
        res.json(data);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
          }
        };

  module.exports = {
    main: main
}
