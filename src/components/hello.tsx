import React from 'react'
import { connect } from 'react-redux'
import { setName, addName, fetchName } from '../store/name/action'
import { StoreState } from '../store/types'

interface HelloProps {
  name: string
  age?: number
  setName?: (name: string) => void
  addName?: () => void
  fetchName?: (id: number) => void
}

const Hello: React.FC<HelloProps> = ({ name, addName, fetchName, setName }) => {
  return (
    <>
      <p>hello, {name}</p>
      <h1 onClick={addName}>addName</h1>
      <h1 onClick={setName && setName.bind(null, 'react')}>setName</h1>
      <h1 onClick={fetchName && fetchName.bind(null, 1)}>axios</h1>
    </>
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    name: state.name
  }
}

export default connect(
  mapStateToProps,
  { setName, addName, fetchName }
)(Hello)
