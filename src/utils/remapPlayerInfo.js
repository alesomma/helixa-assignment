const remapPlayerInfo = responseData => {
    let modifiedResponseData = {
        team: responseData.team,
        player: responseData
    };
    delete modifiedResponseData.player['team']; 
    return modifiedResponseData;
}

export default remapPlayerInfo;
