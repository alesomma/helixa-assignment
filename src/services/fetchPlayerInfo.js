import axios from 'axios';
import actions from "../ducks/actions";
import remapPlayerInfo from '../utils/remapPlayerInfo';

const fetchPlayerInfo = playerId => {
    return (dispatch) => {
        dispatch(actions.fetchPlayerInfo(playerId));
        axios.get(`https://www.balldontlie.io/api/v1/players/${playerId}`)
            .then(response => dispatch(actions.fetchPlayerInfoSuccess(remapPlayerInfo(response.data))))
            .catch(error => dispatch(actions.fetchPlayerInfoError(error)))
    }
};

export default fetchPlayerInfo;