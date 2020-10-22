import axios from 'axios';
import actions from "../ducks/actions";

const fetchPlayerStats = playerId => {
    return (dispatch) => {
        dispatch(actions.fetchPlayerStats(playerId));
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`)
            .then(response => dispatch(actions.fetchPlayerStatsSuccess(response.data)))
            .catch(error => dispatch(actions.fetchPlayerStatsError(error)))
    }
};

export default fetchPlayerStats;