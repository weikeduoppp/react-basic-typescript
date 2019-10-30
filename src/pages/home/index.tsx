import React, { Component } from 'react'

interface HomeProps {
  path: string
}

interface State {
  name?: string
}

export default class Home extends Component<HomeProps, State> {
  state: State = {}
  render() {
    return <div></div>
  }
}
