const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://admin:admin123@mongo-service:27017/mydatabase?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Schema and model
const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
}));

// ✅ Route: GET /items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// ✅ Route: POST /add-item
app.post('/add-item', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.send('Item saved!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
