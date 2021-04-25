import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="app">
      <Switch>
      <Route exact path="/">
        <Header isLoggedIn={false}>
        {/* <Header isLoggedIn={true}> */}
          <Navigation isLoggedIn={false}/>
          {/* <Navigation isLoggedIn={true}/> */}
        </Header>
        <Main />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
