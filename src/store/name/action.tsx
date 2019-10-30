import { Dispatch } from 'redux'
import * as contants from './actionTypes'
import axios from 'axios'
import { makeActionCreator } from '../util'

interface SetNameAction {
  type: contants.DEFAULT
  name: string
}

interface SetNameAction2 {
  type: contants.ADD_COUNTER
  number: number
}

export type NameAtions = SetNameAction | SetNameAction2

export const setName = makeActionCreator(contants.DEFAULT, 'name')
export const addName = (): SetNameAction2 => ({
  type: contants.ADD_COUNTER,
  number: 1
})

export const fetchName = (id: number) => async (dispatch: Dispatch) => {
  return axios
    .get('/api/name')
    .then(res => {
      dispatch(setName('default'))
    })
    .catch(e => {
      console.log('/api/name, fail')
    })
}
