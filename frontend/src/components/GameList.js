import React, { useState, Link } from 'react';
import { useHref, useNavigate } from "react-router-dom";
import Game from './Game';
import CreateButton from './CreateButton';
import { FaPlus } from "react-icons/fa";

function GameList({ games, onDelete, onEdit }) {

    const redirect = useNavigate();

    return (
        <table id="games">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Platform</th>
                    <th>Year</th>
                    <th>Added</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><div>
                        <FaPlus className="nav-icon" onClick={ () => redirect("/create")}/>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, i) => 
                    <Game 
                        game={game} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default GameList;
