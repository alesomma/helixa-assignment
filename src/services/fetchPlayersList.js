import axios from 'axios';
import actions from "../ducks/actions";

const fetchPlayersList = ({search, page, oldCancelToken}) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    
    oldCancelToken && oldCancelToken.cancel('multiple fetchPlayersList called, old request canceled');

    return (dispatch) => {
        dispatch(actions.fetchPlayersList(search));
        axios.get('https://www.balldontlie.io/api/v1/players', {
            params: {
                search,
                page
            },
            cancelToken: source.token
          })
            .then(response => dispatch(actions.fetchPlayersListSuccess(response.data)))
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                  } else {
                    dispatch(actions.fetchPlayersListError(error))
                }
            })
        return source;
    }
};

export default fetchPlayersList;