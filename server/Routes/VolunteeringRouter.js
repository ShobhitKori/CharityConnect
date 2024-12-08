// const express = require('express');
// const router = express.Router();
// const Volunteering = require('../Models/Volunteering');
// const multer = require('multer');

// // Set up Multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// // Add a new volunteering record
// router.post('/add', upload.single('collegeidphoto'), async (req, res) => {
//   try {
//     const volunteeringData = new Volunteering({
//       ...req.body,
//       collegeidphoto: req.file.path, // Save the file path
//     });
//     const savedVolunteering = await volunteeringData.save();
//     res.status(201).json(savedVolunteering);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Fetch all volunteering records
// router.get('/', async (req, res) => {
//   try {
//     const volunteeringRecords = await Volunteering.find();
//     res.status(200).json(volunteeringRecords);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Fetch volunteering record by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const volunteeringRecord = await Volunteering.findById(req.params.id);
//     if (!volunteeringRecord) return res.status(404).json({ error: 'Record not found' });
//     res.status(200).json(volunteeringRecord);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a volunteering record
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedVolunteering = await Volunteering.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedVolunteering) return res.status(404).json({ error: 'Record not found' });
//     res.status(200).json(updatedVolunteering);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Delete a volunteering record
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedVolunteering = await Volunteering.findByIdAndDelete(req.params.id);
//     if (!deletedVolunteering) return res.status(404).json({ error: 'Record not found' });
//     res.status(200).json({ message: 'Record deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const VolunteeringModel = require('../Models/Volunteering'); // Import schema
const upload = require('../Middlewares/upload'); // Import multer config

// Route to add volunteering data
router.post('/add', upload.single('collegeidphoto'), async (req, res) => {
  try {
    const { name, phone, address, email, collegename, abcid, description, workinghour } = req.body;

    // Create a new volunteering document
    const newVolunteering = new VolunteeringModel({
      name,
      phone,
      address,
      email,
      collegename,
      abcid,
      description,
      workinghour,
      collegeidphoto: req.file ? req.file.path : null, // Save file path
    });

    // Save to database
    await newVolunteering.save();

    res.status(201).json({ message: 'Volunteering data saved successfully', data: newVolunteering });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save volunteering data' });
  }
});

module.exports = router;
