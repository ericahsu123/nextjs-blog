const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nextDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const nextSchema = new mongoose.Schema({
  name: String,
});

const Next = mongoose.model('Next', nextSchema);

const hello = (req, res) => {
  const next = new Next({ name: 'John Doe' });
  next.save();
  res.status(200).json({ text: 'Hello' });
};

export default hello;
