import types from './types';

const initialState = {
    playersList: {
        data: null,
        loading: false,
        error: false
    },
    playerInfo: {
        data: null,
        loading: false,
        error: false
    },
    playerStats: {
        data: null,
        loading: false,
        error: false
    }
};

const players = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PLAYERS_LIST:
            return {
                ...state,
                playersList: {
                    data: null,
                    loading: true,
                    error: false,
                    params: action.payload
                }
            };
        case types.FETCH_PLAYERS_LIST_SUCCESS:
            return {
                ...state,
                playersList: {
                    ...action.payload,
                    loading: false,
                    error: false
                }
            };
        case types.FETCH_PLAYERS_LIST_FAILURE:
            return {
                ...state,
                playersList: {
                    data: null,
                    loading: false,
                    error: action.payload
                }
            };
        case types.FETCH_PLAYER_INFO:
            return {
                ...state,
                playerInfo: {
                    data: null,
                    loading: true,
                    error: false,
                    params: action.payload
                }
            };
        case types.FETCH_PLAYER_INFO_SUCCESS:
            return {
                ...state,
                playerInfo: {
                    data: action.payload,
                    loading: false,
                    error: false
                }
            };
        case types.FETCH_PLAYER_INFO_FAILURE:
            return {
                ...state,
                playerInfo: {
                    data: null,
                    loading: false,
                    error: action.payload
                }
            };
        case types.FETCH_PLAYER_STATS:
            return {
                ...state,
                playerStats: {
                    data: null,
                    loading: true,
                    error: false,
                    params: action.payload
                }
            };
        case types.FETCH_PLAYER_STATS_SUCCESS:
            return {
                ...state,
                playerStats: {
                    ...action.payload,
                    loading: false,
                    error: false
                }
            };
        case types.FETCH_PLAYER_STATS_FAILURE:
            return {
                ...state,
                playerStats: {
                    data: null,
                    loading: false,
                    error: action.payload
                }
            };
        default:
            return state;
    }
};

export default players;