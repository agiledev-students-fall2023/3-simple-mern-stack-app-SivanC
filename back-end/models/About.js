const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
    {
        text: {
            type: [String],
            required: true,
        },
    },
)

const About = mongoose.model('About', aboutSchema)

module.exports = {
    About,
}
