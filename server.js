const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Note = require('./models/note.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://learnme292:<Password>@cluster0.w95yaz1.mongodb.net/')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const colors = ['#feca57', '#a29bfe', '#dff9fb', '#fab1a0', '#55efc4', '#81ecec', '#fd79a8', '#74b9ff', '#fdcb6e'];

app.get('/api/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const newNote = new Note({ title, content, color });
  await newNote.save();
  res.json(newNote);
});

app.delete('/api/notes/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
