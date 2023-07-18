// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the platform.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Movies collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const gameSchema = mongoose.Schema({
	title:    { type: String, required: true },
    genre:    { type: String, required: true },
    platform: { type: String, required: true },
	year:     { type: Number, required: true },
    added:    { type: Date, required: true, default: Date.now },
});

// Compile the model from the schema.
const Game = mongoose.model('Game', gameSchema);


// CREATE model *****************************************
const createGame = async (title, genre, platform, year, added) => {
    const game = new Game({ 
        title: title, 
        genre: genre,
        platform: platform,
        year: year, 
        added: added 
    });
    return game.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveGames = async () => {
    const query = Game.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveGameByID = async (_id) => {
    const query = Game.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGameById = async (_id) => {
    const result = await Game.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateGame = async (_id, title, genre, platform, year, added) => {
    const result = await Game.replaceOne({_id: _id }, {
        title: title, 
        genre: genre,
        platform: platform,
        year: year, 
        added: added 
    });
    return { 
        _id: _id, 
        title: title, 
        genre: genre,
        platform: platform,
        year: year, 
        added: added  
    }
}



// Export our variables for use in the controller file.
export { createGame, retrieveGames, retrieveGameByID, updateGame, deleteGameById }