import React, { Component } from "react";
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import remapPlayerInfo from '../../utils/remapPlayerInfo';
import "./style.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			fetchPlayersListCancelToken: null,
			page: 1
		};
	}

  componentDidMount() {
		const { page } = this.state;
    this.props.fetchPlayersList({ page });
  }

  handleInputChange = e => {
		const { fetchPlayersListCancelToken } = this.state;
		const newFetchPlayersListCancelToken = this.props.fetchPlayersList({
			search: e.target.value, 
			page: 1,
			oldCancelToken: fetchPlayersListCancelToken
		});
		this.setState({ fetchPlayersListCancelToken: newFetchPlayersListCancelToken });
  }

  render() {
    const { playersList, fetchPlayerInfoSuccess } = this.props;

    return (
      <div className="mainContainer">
        <input className="searchInput" placeholder="Search" onChange={e => this.handleInputChange(e)} />
        <div className="listContainer">
          {playersList.data?.map(playerInfo => {
						const remappedPlayerInfo = remapPlayerInfo(playerInfo);
						return (
							<PlayerCard
								link={`/player/${playerInfo.id}`}
								onClick={() => fetchPlayerInfoSuccess(remappedPlayerInfo)}
								playerFirstName={playerInfo.first_name}
								playerLastName={playerInfo.last_name}
								key={playerInfo.id}
							/>
						)
					})}
        </div>
      </div>
    );
  }
}

export default Home;
