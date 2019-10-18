import { shuffle } from '../lib/utils'

export default function boardReducer(state =  ["","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"], action) {
    let idx;

    switch (action.type) {
      case "START_GAME":
        return shuffle([...state]);
   
      case "REMOVE_BOOK":
        idx = state.findIndex(book => book.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      default:
        return state;
    }
  }