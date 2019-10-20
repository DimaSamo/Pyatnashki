import { shuffle, isMoveValid } from '../lib/utils'

export default function boardReducer(state =  ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"," ", "15"], action) {
    switch (action.type) {
      case "START_GAME":
        return ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"," ", "15"]
        //  return shuffle([...state]);
        return [...state];
   
      case "MOVE_SQUARE":
        if (isMoveValid(state, action.index)) {
          let newState = [...state]
          let emptyIndex = state.indexOf(" ")
          newState[emptyIndex] = state[action.index]
          newState[action.index] = " "
          return newState
        }
        return [...state]
   
      default:
        return state;
    }
  }