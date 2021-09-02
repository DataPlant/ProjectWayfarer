const db = require('./models');
const data = require('./gameData.json');

// Delete
db.Game.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'games deleted');

  // Create - Add some games to the DB
  db.Game.create(data.games, (err, seededGames) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededGames.length, 'games created successfully');
    console.log('done!');

    process.exit();
  });
});
