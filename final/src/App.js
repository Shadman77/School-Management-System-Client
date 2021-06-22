import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './views/Register';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
