import React, { Component } from 'react';
import PlayerImage from '../../components/PlayerImage/PlayerImage';
import PlayerInfoTable from '../../components/PlayerInfoTable/PlayerInfoTable';
import './style.css';

class PlayerDetails extends Component {

    componentDidMount() {
        const { match, playerInfo } = this.props;

        this.props.fetchPlayerStats(match.params.playerId)

        if(!playerInfo.data) {
            this.props.fetchPlayerInfo(match.params.playerId)
        }
    }

    render() {
        const { playerStats, playerInfo } = this.props;

        return (
            <div>
                <PlayerImage lastName={playerInfo.data?.player.last_name} firstName={playerInfo.data?.player.first_name} />
                <div>
                    {playerInfo.data?.player && <PlayerInfoTable title="PlayerInfo" playerInfoObj={playerInfo.data.player} />}
                    {playerInfo.data?.team && <PlayerInfoTable title="PlayerTeam" playerInfoObj={playerInfo.data.team} />}
                    {playerStats.data?.length > 0 ? (
                        <PlayerInfoTable title="PlayerStats" playerInfoObj={playerStats.data[0]} /> ) : (
                        <div className="statsNotAvailable">Player stats not available at the moment</div>
                    )}
                </div>
            </div>
        );
    }
};

export default PlayerDetails;
