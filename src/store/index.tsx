import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
import { composeEnhancers } from './util'
import thunk from 'redux-thunk'

const middleware = [thunk]

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
