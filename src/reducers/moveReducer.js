import { shuffle, isMoveValid } from '../lib/utils'

export default function moveReducer(state =  0, action) {
    switch (action.type) {
      case "INCREMENT_MOVES":
        if (isMoveValid(action.payload.board, action.payload.index)) {
          return state + 1;
        }
        return state;

      default:
        return state;
    }
  }