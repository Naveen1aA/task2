const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

// Initialize the app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://naveenmallireddi1919:7997880013@cluster0.7mnjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error', err));

// Use task routes
app.use('/tasks', taskRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
