import React, {Component, createContext} from 'react';


// Context creation
interface IContext {
  isAuth: boolean,
  toggleAuth: () => void,
}

const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {},
});

class Login extends Component {

  static contextType = AuthContext;

  render() {
    const { toggleAuth, isAuth } = this.context;

    return (
      <button onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    );
  }
}

// Inner component (old variant with Consumer)
const Profile = () => (
  <AuthContext.Consumer>
    {({ isAuth }) => (
      <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
    )}
  </AuthContext.Consumer>
);

// Root component
class Context extends Component<{}, {isAuth: boolean}> {
  readonly state = {
    isAuth: false,
  };

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth
    }));
  };

  render() {
    const { isAuth } = this.state;
    const context: IContext = { isAuth, toggleAuth: this.toggleAuth };

    return (
      <AuthContext.Provider value={context}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}


const App = () => <Context />;

export default App;
