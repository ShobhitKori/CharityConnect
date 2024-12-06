const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const Schema = mongoose.Schema;

const VolunteeringSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Validates a 10-digit phone number
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
  },
  collegename: {
    type: String,
    required: true,
  },
  collegeidphoto: {
    type: String, // Stores a URL or file path
    required: true,
  },
  abcid: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: '', // Optional field
  },
  workinghour: {
    type: String, // Example: "9 AM - 5 PM"
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Middleware to hash the password before saving
VolunteeringSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10); // Generate salt
      this.password = await bcrypt.hash(this.password, salt); // Hash password
    } catch (err) {
      return next(err);
    }
  }
  next();
});

// Method to compare a provided password with the stored hash
VolunteeringSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Volunteering = mongoose.model('Volunteering', VolunteeringSchema);
module.exports = Volunteering;
