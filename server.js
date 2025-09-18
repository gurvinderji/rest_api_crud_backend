const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.get("/notes", (req, res) => {
  res.json(notes);
});
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json({ message: "note created sucessfully" });
});
app.delete("/notes/:idx", (req, res) => {
  const index = req.params.idx;
  delete notes[index];
  res.json({ message: "note deleted sucessfully" });
});

app.patch("/notes/:idx", (req, res) => {
  const index = req.params.idx;
  const { title } = req.body;

  notes[index].title = title;
  res.json({ message: "note updated sucessfully" });
});

app.listen(3000, () => {
  console.log(`server is runing on port 3000`);
});
