const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api/data', {
  // useNewUrlParser: true, // Remove this line
  // useUnifiedTopology: true, // Remove this line
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
