const mongoConnection=require(__dirname+'../../../config/mongo_config.js');
const { ObjectId } = require('mongodb');

 async function main(req, res) {
    try {
    const db = await mongoConnection.main();
    console.log(db);
    db.collection('movies').deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ message: 'Movie deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports = {
    main: main
}