const { MongoClient } = require("mongodb") // grabs MongoClient object from mongodb library installed
require("dotenv").config({path: "./config.env"}) // look at config.env for env variables

async function main() {
    const Db = process.env.ATLAS_URI // fetches login info
    const client = new MongoClient(Db) // create mongo user with our login info

    try {
        await client.connect() // connect to db
        const collections = await client.db("Portfolio").collections() // fetch collection names
        collections.forEach((collection) => console.log(collection.s.namespace.collection)) // print each collection name
    } catch(e) {
        console.error(e)
    } finally {
        await client.close() // close db connection
    }
    
}

main()