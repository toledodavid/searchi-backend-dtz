const express = require('express');
const storeSchema = require('../models/store');

const router = express.Router();


// create store
router.post('/store', (req, res) => {
  const store = storeSchema(req.body);
  store.save()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

// get all stores
router.get('/stores', (req, res) => {
  storeSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

// get a store
router.get('/store/:id', (req, res) => {
  const { id } = req.params;
  storeSchema
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

// update a store
router.put('/store/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  storeSchema
  .updateOne({_id: id}, {$set: {name}})
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

// delete a store
router.delete('/store/:id', (req, res) => {
  const { id } = req.params;

  storeSchema
  .findByIdAndDelete(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

module.exports = router;