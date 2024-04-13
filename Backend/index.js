const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const sectionRoute = require("./routes/section.route");
const User = require('./models/user.model');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/', sectionRoute);
app.use('/', authRoutes);
app.use('/:userId', authRoutes);
mongoose.connect('MongoDB URL', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
