const mongoose = require("mongoose")

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Person", personSchema)