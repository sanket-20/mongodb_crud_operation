const { MongoClient} = require('mongodb');

// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// database name
const dbName = 'curdMongodb'

async function main() {
    // use connrct method to connect to the server
    await client.connect();
    console.log('DB Connected Successfully')
    const db =client.db(dbName);
    return db;
}

module.exports = {
    main:main
}

