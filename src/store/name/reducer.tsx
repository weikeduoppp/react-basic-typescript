import * as constant from './actionTypes'
import { NameAtions } from './action'

const initalState: string = 'your name'

export default (state = initalState, action: NameAtions): string => {
  switch (action.type) {
    case constant.DEFAULT:
      return action.name
    case constant.ADD_COUNTER:
      return state + 1
    default:
      return state
  }
}
