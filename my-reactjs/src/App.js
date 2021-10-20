import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import ListRickAndMorty from './components/ListRickAndMorty'
import ThisPerson from './components/ThisPerson'
import NoMatch from './components/NoMatch';


function App() {
    return (
        <Router>
        <Link to="/">Home</Link>
        <Link to="/all-persons">All persons</Link>
    <Link to="/about">About</Link>

        <Switch>
        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/all-persons/:id">
        <ThisPerson />
        </Route>

        <Route path="/all-persons">
        <ListRickAndMorty />
        </Route>

        <Route path="/about">
        <About />
        </Route>

        <Route path="*">
        <NoMatch />
        </Route>

        </Switch>

        </Router>
);
}

export default App;

