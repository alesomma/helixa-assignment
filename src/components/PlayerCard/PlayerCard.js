import React from 'react';
import { Link } from 'react-router-dom';
import PlayerImage from '../PlayerImage/PlayerImage';
import './style.css';

const PlayerCard = ({ link, onClick, playerFirstName, playerLastName }) => (
    <Link
        className="playerCard"
        to={link}
        onClick={onClick}
    >
        <PlayerImage lastName={playerLastName} firstName={playerFirstName} />
        <span className="playerName">{playerFirstName} {playerLastName}</span>
    </Link>
);

export default PlayerCard;
