import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

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
                                value={title}
                                onChange={e => setTitle(e.target.value)} 
                                id="title" /> 
                        </td>
                        <td>
                            <input
                                type="text"
                                value={genre}
                                onChange={e => setGenre(e.target.value)} 
                                id="genre" />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={platform}
                                onChange={e => setPlatform(e.target.value)} 
                                id="platform" />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={year}
                                onChange={e => setYear(e.target.value)} 
                                id="year" />
                        </td>
                        <td>
                            <input
                                type="date"
                                value={added}
                                onChange={e => setAdded(e.target.value)} 
                                id="added" />
                        </td>
                        <td>
                            <button
                                onClick={editGame}
                                id="submit"
                                >Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditGamePage;