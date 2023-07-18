import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditGamePage = ({ gameToEdit }) => {
 
    const [title, setTitle]       = useState(gameToEdit.title);
    const [genre, setGenre]       = useState(gameToEdit.genre);
    const [platform, setPlatform] = useState(gameToEdit.platform);
    const [year, setYear]         = useState(gameToEdit.year);
    const [added, setAdded]       = useState(gameToEdit.added);
    
    const redirect = useNavigate();

    const editGame = async () => {
        const response = await fetch(`/games/${gameToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                year: year, 
                genre: genre,
                platform: platform,
                year: year,
                added: added
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`document edited`);
        } else {
            const errMessage = await response.json();
            alert(`document not edited; status ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit Game</h2>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="title">Game title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="genre">Genre:</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={e => setGenre(e.target.value)} 
                        id="genre" />

                    <label for="platform">Platform:</label>
                    <input
                        type="text"
                        value={platform}
                        onChange={e => setPlatform(e.target.value)} 
                        id="platform" />
                    
                    <label for="year">Year released:</label>
                    <input
                        type="number"
                        value={year}
                        onChange={e => setYear(e.target.value)} 
                        id="year" />

                    <label for="added">Date added:</label>
                    <input
                        type="text"
                        value={added}
                        onChange={e => setAdded(e.target.value)} 
                        id="added" />

                    <label for="submit">
                    <button
                        onClick={editGame}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditGamePage;