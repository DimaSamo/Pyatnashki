export default function leaderboardReducer(state = { entries: [], requesting: false }, action) {
    switch (action.type) {
   
      case 'START_GETTING_LEADERBOARD_REQUEST':
        return {
          ...state,
          leaderboard: [...state.entries],
          requesting: true
        }
   
      case 'ADD_ENTRIES':
        return {
          ...state,
          entries: action.entries,
          requesting: false
        }
   
      default:
        return state;
    }
  };