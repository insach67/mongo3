const mongoose = require("mongoose");
const { insertManyWithMongoose } = require("./create");
const { deleteWithLastCompany } = require("./delete");
const { findAllWithMongoose, findWithSalary, findWithExp, findWithTwoConditions } = require("./read");
const { updateWithSalary } = require("./update");


const connectionString = 'mongodb://127.0.0.1:27017/mongoose';

mongoose.connect(connectionString, (err, db) => {
    if (err) {
        console.error("Error while connecting", err);
        return;
    }
    console.log("Connected to Database")
})

insertManyWithMongoose();

findAllWithMongoose();

findWithSalary();

findWithExp();

findWithTwoConditions();

updateWithSalary();

deleteWithLastCompany();