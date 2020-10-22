import { connect } from 'react-redux';
import fetchPlayerStats from '../../services/fetchPlayerStats';
import fetchPlayerInfo from '../../services/fetchPlayerInfo';
import PlayerDetails from './PlayerDetails';

const mapStateToProps = store => ({
    playerStats: store.playerStats,
    playerInfo: store.playerInfo,
});

const mapDispatchToProps = dispatch => ({
    fetchPlayerStats: playerId => dispatch(fetchPlayerStats(playerId)),
    fetchPlayerInfo: playerId => dispatch(fetchPlayerInfo(playerId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerDetails);
