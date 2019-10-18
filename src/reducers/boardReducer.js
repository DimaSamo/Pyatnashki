import { shuffle, isMoveValid } from '../lib/utils'

export default function boardReducer(state =  ["","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"], action) {
    switch (action.type) {
      case "START_GAME":
        return shuffle([...state]);
   
      case "MOVE_SQUARE":
        console.log(isMoveValid(state, action.index))
        console.log(action.index)
        return [...state]
   
      default:
        return state;
    }
  }