import './App.css';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="NoteTaker">
        <Helmet>
          <title>Note Builder</title>
        </Helmet>

        <Header />

        <Router>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
          </Switch>
        </Router>

        <Footer />
    </div>
  );
}

export default App;
