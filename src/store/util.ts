import { compose } from 'redux'
// 帮助生成 action creator
interface Action {
  type: string
  // 任意属性
  [propName: string]: any
}
export function makeActionCreator(type: string, ...argNames: string[]) {
  return function(...args: any[]) {
    const action: Action = { type }
    argNames.forEach((arg, index) => {
      action[arg] = args[index]
    })
    return action
  }
}

export const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
