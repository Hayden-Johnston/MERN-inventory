import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

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
        <article>
            <h2>Add Game</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Platform</th>
                        <th>Year</th>
                        <th>Added</th>
                        <th><div>
                            <FaPlus className="nav-icon" onClick={ () => redirect("/create")}/>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Title"
                                defaultValue={title}
                                onChange={e => setTitle(e.target.value)} 
                                id="title" />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Genre"
                                value={genre}
                                onChange={e => setGenre(e.target.value)} 
                                id="genre" />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Platform"
                                value={platform}
                                onChange={e => setPlatform(e.target.value)} 
                                id="platform" />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={year}
                                placeholder="Year released"
                                onChange={e => setYear(e.target.value)} 
                                id="year" /> 
                        </td>
                        <td>
                            <input
                                type="date"
                                placeholder="Date added"
                                value={added}
                                onChange={e => setAdded(e.target.value)} 
                                id="added" />
                        </td>
                        <td>
                            <button
                                type="submit"
                                onClick={addGame}
                                id="submit"
                                >Add</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </article>
        </>
    );
}

export default AddGamePage;