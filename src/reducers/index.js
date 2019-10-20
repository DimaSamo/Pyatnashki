import { combineReducers } from 'redux';
import boardReducer from './boardReducer'
import moveReducer from './moveReducer';
export default combineReducers({
    board: boardReducer,
    moves: moveReducer
});