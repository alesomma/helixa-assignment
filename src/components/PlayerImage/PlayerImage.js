import React from "react";
import './style.css';

const PlayerImage = ({ lastName, firstName }) => (
    <img className="userIcon" src={`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`} alt="player_icon"/>
);

export default PlayerImage;
