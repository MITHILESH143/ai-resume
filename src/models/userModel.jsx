import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Fix: Only create model if it doesn't already exist
const User = mongoose.models.Users || mongoose.model('Users', userSchema);

export default User;
