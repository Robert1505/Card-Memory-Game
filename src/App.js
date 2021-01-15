import Start from './Start';
import Game from './Game';
import ResultsPositive from './ResultsPositive';
import ResultsNegative from './ResultsNegative';
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
      <Route path = "/resultspositive">
        <ResultsPositive />
      </Route>
      <Route path = "/resultsnegative">
        <ResultsNegative />
      </Route>
    </BrowserRouter>
  );
}

export default App;
