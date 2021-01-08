import Start from './Start';
import Game from './Game';
import Results from './Results';
import './Style/styles.css';
import './Style/custom.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Route path = "/" exact>
        <Redirect to = "/start"/>
      </Route>
      <Route path = "/start">
        <div className = "background">
          <Start />
        </div>
      </Route>
      <Route path = "/game">
        <Game />
      </Route>
      <Route path = "/results">
        <Results />
      </Route>
    </BrowserRouter>
  );
}

export default App;
