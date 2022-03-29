const MongoClient = require('mongodb').MongoClient;

export async function connect() {
    try {
    const client = await MongoClient.connect('mongodb://localhost:27017/')
    const db = client.db('node-restapi');
    console.log('DB is connected');
    return db;
    }  catch(e) {
        console.log(e);
    }
}
