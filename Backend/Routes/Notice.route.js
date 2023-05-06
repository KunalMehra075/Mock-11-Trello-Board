const NoticeModel = require("../Models/Notice.model");

const NoticeRouter = require("express").Router()

// ! GET ALL THE NOTICES
NoticeRouter.get("/", async (req, res) => {
    try {
        const Data = await NoticeModel.find();
        res.status(200).json({ Message: "All the notices", Data: Data });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});
// ! POST A NEW NOTICE
NoticeRouter.post("/create", async (req, res) => {
    const notice = req.body
    try {
        const instance = new NoticeModel(notice);
        await instance.save()
        res.status(200).json({ Message: "Created a new Notice", instance });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});
// ! PATCH A NOTICE
NoticeRouter.patch("/edit/:id", async (req, res) => {
    const id = req.params.id
    const payload = req.body
    try {
        const Updated = await NoticeModel.findByIdAndUpdate({ _id: id }, payload);
        res.status(200).json({ Message: "Updated A Notice", UpdatedID: Updated._id });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});
// ! DELETE A NOTICE
NoticeRouter.patch("/delete/:id", async (req, res) => {
    const id = req.params.id
    try {
        const Deleted = await NoticeModel.findByIdAndDelete({ _id: id });
        res.status(200).json({ Message: "Deleted A Notice", Deleted });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});
module.exports = NoticeRouter;