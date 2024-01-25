const mongoConnection=require(__dirname+'../../../config/mongo_config.js');


 async function main(req, res) {

    const db = await mongoConnection.main();
    console.log(db);
    db.collection('movies').updateOne({name:"neeraj"}, {$set: {name: "Harry Potter and the Order of the Phoenix"}});
    res.json({"message": "Update data successfully"});    
}

module.exports = {
    main: main
}