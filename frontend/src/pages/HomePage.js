import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GameList from '../components/GameList';

function HomePage({ setGame }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [games, setGames] = useState([]);

    // RETRIEVE the entire list of games
    const loadGames = async () => {
        const response = await fetch('/games');
        const games = await response.json();
        setGames(games);
    } 
    
    // UPDATE a single game
    const onEditGame = async game => {
        setGame(game);
        redirect("/update");
    }

    // DELETE a single game  
    const onDeleteGame = async _id => {
        const response = await fetch(`/games/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/games');
            const games = await getResponse.json();
            setGames(games);
        } else {
            console.error(`Failed to delete game with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the games
    useEffect(() => {
        loadGames();
    }, []);

    // DISPLAY the games
    return (
        <>
            <GameList 
                games={games} 
                onEdit={onEditGame} 
                onDelete={onDeleteGame} 
            />
        </>
    );
}

export default HomePage;