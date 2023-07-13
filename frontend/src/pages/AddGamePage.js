import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';

export const AddGamePage = () => {

    const [title, setTitle]       = useState('');
    const [genre, setGenre]       = useState('');
    const [platform, setPlatform] = useState('');
    const [year, setYear]         = useState('');
    const [added, setAdded]       = useState('');
    
    const redirect = useNavigate();

    const addGame = async () => {
        const newGame = { title, genre, platform, year, added };
        const response = await fetch('/', {
            method: 'post',
            body: JSON.stringify(newGame),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document added`);
            redirect("/");
        } else {
            alert(`document not added status code = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <Navigation />
        <article>
            <h2>Add Game</h2>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="title">Title:</label>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />

                    <label for="genre">Genre:</label>
                    <input
                        type="text"
                        placeholder="Genre"
                        value={genre}
                        onChange={e => setGenre(e.target.value)} 
                        id="title" />

                    <label for="platform">Platform:</label>
                    <input
                        type="text"
                        placeholder="Platform"
                        value={platform}
                        onChange={e => setPlatform(e.target.value)} 
                        id="title" />
                    
                    <label for="year">Year released:</label>
                    <input
                        type="number"
                        value={year}
                        placeholder="Year released"
                        onChange={e => setYear(e.target.value)} 
                        id="year" />

                    <label for="added">Date added:</label>
                    <input
                        type="text"
                        placeholder="Date added"
                        value={added}
                        onChange={e => setAdded(e.target.value)} 
                        id="language" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addGame}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddGamePage;