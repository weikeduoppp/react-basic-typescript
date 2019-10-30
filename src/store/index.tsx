import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
import { composeEnhancers } from './util'
import thunk from 'redux-thunk'
import { StoreState } from './types'

const middleware = [thunk]

const initialState: StoreState = {
  name: 'typescript'
}

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
