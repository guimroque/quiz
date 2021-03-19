import ReactDOM from 'react-dom';

//style
import { GlobalStyle } from "./assets/styles/global";

//router config
import { BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import { Home } from './components/Home/Home';
import { Quiz } from './components/Quiz/Quiz';
import { ResultList } from './components/Result/ResultList';

//router config


ReactDOM.render(
  <Router>
  <GlobalStyle/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/result" component={ResultList}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);