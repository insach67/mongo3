const mongoose = require("mongoose");
const { employeeSchema } = require("./schema");

const employeeModel = mongoose.model('employees', employeeSchema);

const findAllWithMongoose = async () => {
    try {
        const result = await employeeModel.find();

        console.log("Succesfully found all", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithSalary = async () => {
    try {
        const result = await employeeModel.find({"salary": {$gt: 30000}});

        console.log("Succesfully found with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithExp = async () => {
    try {
        const result = await employeeModel.find({"overallExp": {$gt: 1}});

        console.log("Succesfully found with Experience", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithTwoConditions = async () => {
    try {
        const result = await employeeModel.find({$and: [{"yearGrad": {$gt: 2015}}, {"overallExp": {$gt: 1}}]});

        console.log("Succesfully found with Two Conditions", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}



module.exports = {
    findAllWithMongoose,
    findWithSalary,
    findWithExp,
    findWithTwoConditions
}