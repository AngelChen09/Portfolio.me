const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId

let projectRoutes = express.Router()

// All project
projectRoutes.route("/projects").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("Projects").find({}).toArray()
    if (data.length > 0) {
        response.json(data)
    } else {
        console.log(data)
        throw new Error("Data was not found :(")
    }
})

// Specific project
projectRoutes.route("/projects/:id").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("Projects").findOne({_id: new ObjectId(request.params.id)})
    if (Object.keys(data).length > 0) {
        response.json(data)
    } else {
        throw new Error("Data was not found :(")
    }
})

// Create new project
projectRoutes.route("/projects").post(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        name: request.body.name,
        description: request.body.desc,
        stack: request.body.stack
    }
    let data = await db.collection("Projects").insertOne(mongoObject)
    response.json(data)
})

// Update a project
projectRoutes.route("/projects/:id").put(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            name: request.body.name,
            description: request.body.desc,
            stack: request.body.stack
        }
    }
    let data = await db.collection("Projects").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
    response.json(data)
})

// Delete a project
projectRoutes.route("/projects/:id").delete(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("Projects").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)
})

module.exports = projectRoutes