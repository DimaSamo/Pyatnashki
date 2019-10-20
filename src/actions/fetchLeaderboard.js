export function fetchLeaderboard() {
    return (dispatch) => {
      dispatch({ type: 'START_GETTING_LEADERBOARD_REQUEST' });
      fetch('http://localhost:3000/leaderboards.json')
        .then(response => response.json())
        .then(leaderboardEntries => dispatch({ type: 'ADD_ENTRIES', entries: leaderboardEntries }));
    };
  }