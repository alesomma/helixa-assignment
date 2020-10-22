import { connect } from 'react-redux';
import actions from '../../ducks/actions';
import fetchPlayersList from '../../services/fetchPlayersList';
import Home from './Home';

const mapStateToProps = store => ({
    playersList: store.playersList
});

const mapDispatchToProps = dispatch => ({
    fetchPlayersList: params => dispatch(fetchPlayersList(params)),
    fetchPlayerInfoSuccess: playerInfo => dispatch(actions.fetchPlayerInfoSuccess(playerInfo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);