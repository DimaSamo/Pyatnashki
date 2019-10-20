import { combineReducers } from 'redux';
import boardReducer from './boardReducer'
import moveReducer from './moveReducer';
import leaderboardReducer from './leaderboardReducer';
export default combineReducers({
    board: boardReducer,
    moves: moveReducer,
    leaderboard: leaderboardReducer
});