const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await Drone.find()
    res.render("drones/list", {allDrones})
  } catch (error) {
    console.log(error)
  }
});

router.get('/create',  (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render("drones/create-form")
 });

router.post('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    await Drone.create(req.body)
    res.redirect("/drones")
  } catch (error) {
    console.log(error)
    res.redirect("/drones/create")
  }
});

router.get('/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const droneToEdit = await Drone.findById(req.params.id)
    res.render("drones/update-form", {droneToEdit})
    
  } catch (error) {
    console.log(error)
  }
});

router.post('/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
