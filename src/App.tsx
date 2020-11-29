import React, {Component} from 'react';

type CounterProps = {
	title?: string;
};

type CounterState = {
	count: number;
};

class Counter extends Component<CounterProps, CounterState> {
	state = {
		count: 0,
	};

	componentDidMount(): void {}

	shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
		return true;
	}

	static getDerivedStateFromProps(props: CounterProps, state: CounterState): null | CounterState {
		return false ? {count: 2} : null;
	}

	clickHandler = (evt: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    console.log(evt);
		this.setState(({count}) => ({count: ++count}));
	};

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.clickHandler}>+</button>
				<a href="#id" onClick={this.clickHandler}>+</a>
			</div>
		);
	}
}

class Form extends Component <{}, {}> {

  inputHandler = (evt: React.FocusEvent) => {
    console.log(evt.target);
  }

  submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('Submitted');
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          <input onFocus={this.inputHandler} type="text" name="text"/>
        </label>
        <button type="submit">submit</button>
      </form>
    )
  }
}

const App = () => (
	<>
		<Counter />
    <Form />
	</>
);

export default App;
