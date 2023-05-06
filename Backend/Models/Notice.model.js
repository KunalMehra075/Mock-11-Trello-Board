const mongoose = require("mongoose");
const noticeSchema = mongoose.Schema({
    authorName: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, default: new Date().toISOString() }
})
const NoticeModel = mongoose.model("notices", noticeSchema)

module.exports = NoticeModel;