"use strict";

const express = require("express");
const router = express.Router();
const permissions = require("../middleware/acl.js");
const bearerAuth = require("../middleware/bearerAuth");
const { avengersCollection } = require("../models/index");

// add routes
router.get("/avengers", bearerAuth, permissions("delete"), getAvengers);
router.get("/avenger", bearerAuth, getAvengersById);
router.post("/avengers", bearerAuth, createAvengers);
router.put("/avengers/:id", bearerAuth, updateAvengers);
router.delete("/avengers/:id", bearerAuth, deleteAvengers);

async function getAvengers(req, res) {
  let avengers = await avengersCollection.read();
  res.status(200).json(avengers);
}

async function getAvengersById(req, res) {
    const id = parseInt(req.userId);
    console.log("userrrrrrrrrrrrrrrrrrrrrrr",req.userId);
  let avengers = await avengersCollection.read(id);
  res.status(200).json(avengers);
}

async function createAvengers(req, res) {
  let newAvengers = req.body;
  newAvengers.userId = req.userId;
  console.log(avengersCollection);
  let avengers = await avengersCollection.create(newAvengers);
  res.status(200).json(avengers);
}

async function updateAvengers(req, res) {
  let id = req.params.id;
  let updateAvengers = req.body;
  let avengers = await avengersCollection.update(id, updateAvengers);
  res.status(200).json(avengers);
}

async function deleteAvengers(req, res) {
  let id = req.params.id;
  let avengers = await avengersCollection.delete(id);
  res.status(200).json(avengers);
}

module.exports = router;
