import React, { Component } from 'react';

type CounterProps = {
  title?: string
}

type CounterState = {
  count: number
}

class Counter extends Component <CounterProps, CounterState> {
  state = {
    count: 0
  }

  componentDidMount():void {}

  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState):boolean {
    return true;
  }

  static getDerivedStateFromProps(props: CounterProps, state: CounterState): null | CounterState {
    return false ? {count: 2} : null
  }

  clickHandler = () => {
    this.setState(({count}) => ({count: ++count}))
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickHandler}>+</button>
      </div>
    )
  }
}

const App = () => <Counter />

export default App;
