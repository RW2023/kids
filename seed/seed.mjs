// seed.mjs
import dbConnect from '../src/utils/mongodb.js';
import User from '../src/models/user.js';
import Chore from '../src/models/chore.js';

async function seedDatabase() {
  await dbConnect();

  // Sample users
  const users = [
    {
      name: 'Ryan Wilson',
      email: 'ryanwilson2005@gmail.com',
      password: 'securepassword',
      role: 'parent',
    },
    {
      name: 'Veronique Dasse',
      email: 'vdasse@hotmail.com',
      password: 'securepassword',
      role: 'parent',
    },
    // ... more users
  ];

  // Sample chores
  const chores = [
    {
      title: 'Wash Dishes',
      description: 'Wash all the dishes after dinner.',
      status: 'pending',
      subtasks: [
        { title: 'Wash plates', status: 'pending' },
        { title: 'Wash glasses', status: 'pending' },
        { title: 'Wash utensils', status: 'pending' },
      ],
    },
    {
      title: 'Clean Room',
      description: 'Clean up the bedroom.',
      status: 'pending',
      subtasks: [
        { title: 'Clean bed', status: 'pending' },
        { title: 'Clean desk', status: 'pending' },
        { title: 'Clean floor', status: 'pending' },
      ],
    },
    // ... more chores
  ];

  try {
    await User.deleteMany({}); // Clear existing data
    await Chore.deleteMany({});
    await User.insertMany(users); // Insert new data
    await Chore.insertMany(chores);

    console.log('Database has been seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();
