
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode
}
class MyPortal extends Component {

  private el = document.createElement('div');

  public componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  public render(): React.ReactElement<PortalProps> {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

type AppState = {
  count: number
}

class App extends Component <{}, AppState> {
  state = {
    count: 0,
  }

  handleClick = ():void => {
    this.setState(({ count }) => ({
      count: ++count,
    }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Clicks: {this.state.count}</p>
        <span>Text</span>
        <MyPortal>
          <div>TEST PORTAL</div>
          <button>Click</button>
        </MyPortal>
      </div>
    );
  }
}

export default App;
