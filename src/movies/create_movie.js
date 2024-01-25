const mongoConnection=require(__dirname+'../../../config/mongo_config.js');


 async function main(req, res) {

    const db = await mongoConnection.main();
    console.log(db);
    db.collection('movies').insertOne(req.body);
    res.send("create movie sucessfully")
    
}

module.exports = {
    main: main
}
