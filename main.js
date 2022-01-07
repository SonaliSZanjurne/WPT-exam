const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMsg, showMsg } = require("./1");
const Async = require("bluebird/js/release/async");
app.get("/message", async (req, res) => {
  const list = await showMsg();
  res.json(list);
});

app.post("/add-msg", async (req, res) => {
  const message = req.body;
  await addMsg(message);
  res.json({ message1: "message send succesfully" });
});

app.listen(4000, () => console.log("server started"));
