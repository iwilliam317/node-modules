const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodemodules');

mongoose.Promise = global.Promise;

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const Dog = mongoose.model('Dog', DogSchema);

// creates a dog
Dog.create({ name: 'Tsuki' });

// returns all dogs
// Dog.find({}, (error, results) => {
//   if (error) throw error;
//   console.log(results);
// });

// removes all dogs
Dog.remove({}, error => {
  if (error) throw error;
});

// checks if all dogs were removed
Dog.find({}, (error, results) => {
  if (error) throw error;
  console.log(results);
});
