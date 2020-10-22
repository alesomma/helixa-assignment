import React from 'react';
import './style.css';

const PlayerInfoTable = ({ title, playerInfoObj }) => (
  <div className="playerInfoTable__Container">
    <span className="playerInfoTable__Title">{title}</span>
    <div className="playerInfoTable">
      {Object.keys(playerInfoObj).map((playerInfoKey, i) => playerInfoObj[playerInfoKey] && (
        <span key={i}>
          {playerInfoKey}: <b>{playerInfoObj[playerInfoKey]}</b>
        </span>
      ))}
    </div>
  </div>
);

export default PlayerInfoTable;
