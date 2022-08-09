const mongoose = require("mongoose");
const { employeeSchema } = require("./schema");

const employeeModel = mongoose.model('employees', employeeSchema);

const deleteWithLastCompany = async () => {
    try {
        const result = await employeeModel.deleteMany({"lastCompany": "Y"});

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

module.exports = {
    deleteWithLastCompany
}