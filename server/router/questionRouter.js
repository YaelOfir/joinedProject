const rep = require("../repository");
const express = require("express");
const router = express.Router();
const asyncHandler = require("../asyncHandelr");

router.post(
  "/Question/add",
  asyncHandler(async (req, res) => {
    const data = await rep.getQestionData();

    const getData = req.body;
    if (getData.id == null || getData.Title == null) {
      return res
        .status(401)
        .send({ error: true, msg: "Question data missing" });
    }
    data.push(getData);
    rep.saveQustionData(data);
    res.send({ success: true, msg: "Question data added successfully" });
  })
);

router.get(
  "/Question/list",
  asyncHandler(async (req, res) => {
    const questions = await rep.getQestionData();
    res.json(questions);
  })
);

router.patch(
  "/Question/update/:Title",
  asyncHandler(async (req, res) => {
    const Title = req.params.Title;
    //get the update data
    const getData = req.body;
    //get the existing Question data
    const data = await rep.getQestionData();

    //filter the data
    const updateQuestion = data.filter((question) => question.Title !== Title);
    //push the updated data
    updateQuestion.push(getData);
    //finally save it
    rep.saveQustionData(updateQuestion);
    res.send({ success: true, msg: "Question data updated successfully" });
  })
);


module.exports = router;
