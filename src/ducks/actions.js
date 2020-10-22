import types from './types';

const fetchPlayersList = _ => ({
  type:types.FETCH_PLAYERS_LIST
});

const fetchPlayersListSuccess = playersList => ({
  type:types.FETCH_PLAYERS_LIST_SUCCESS,
  payload: playersList
});


const fetchPlayersListFailure = error => ({
  type:types.FETCH_PLAYERS_LIST_FAILURE,
  error
});

const fetchPlayerInfo = playerId => ({
  type:types.FETCH_PLAYER_INFO,
  payload: playerId
});

const fetchPlayerInfoSuccess = playersList => ({
  type:types.FETCH_PLAYER_INFO_SUCCESS,
  payload: playersList
});


const fetchPlayerInfoFailure = error => ({
  type:types.FETCH_PLAYER_INFO_FAILURE,
  error
});

const fetchPlayerStats = playerId => ({
  type:types.FETCH_PLAYER_STATS,
  payload: playerId
});

const fetchPlayerStatsSuccess = playerStats => ({
  type:types.FETCH_PLAYER_STATS_SUCCESS,
  payload: playerStats
});


const fetchPlayerStatsFailure = error => ({
  type:types.FETCH_PLAYER_STATS_FAILURE,
  error
});

export default {
  fetchPlayersList,
  fetchPlayersListSuccess,
  fetchPlayersListFailure,
  fetchPlayerInfo,
  fetchPlayerInfoSuccess,
  fetchPlayerInfoFailure,
  fetchPlayerStats,
  fetchPlayerStatsSuccess,
  fetchPlayerStatsFailure
}

