import React, {Component} from 'react';
import './reset.css';
import './App.css';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
// import RocketPage from './Components/RocketPage/RocketPage';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          
        </div>
        {routes}
      </HashRouter>
    );
  }
}

export default App;
