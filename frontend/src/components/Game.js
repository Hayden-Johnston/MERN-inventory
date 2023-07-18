import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function Game({ game, onEdit, onDelete }) {
    return (
        <tr>
            <td style={{whiteSpace: 'nowrap'}}>{game.title}</td>
            <td>{game.genre}</td>
            <td>{game.platform}</td>
            <td>{game.year}</td>
            <td>{game.added.slice(0, 10)}</td>
            <td><FaTrash onClick={() => onDelete(game._id)} /></td>
            <td><FaEdit onClick={() => onEdit(game)} /></td>
            <td></td>
        </tr>
    );
}

export default Game;