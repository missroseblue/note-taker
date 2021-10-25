const router = require("express").Router();
const shortid = require("shortid");
const fs = require("fs");

let notes = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
  res.json(notes);
});

router.post("/api/notes", (req, res) => {
  console.log(req.body);
  let newNotes = {
    id: shortid.generate(),
    title: req.body.title,
    text: req.body.text,
  };
  console.log(newNotes);
  notes.push(newNotes);
  console.log(notes);
  fs.writeFileSync(
      "./db/db.json", JSON.stringify(notes)
  )
  res.json(notes)
});

module.exports = router;
