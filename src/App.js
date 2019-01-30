import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

const Index = () => <h1>HomePage</h1>;
const Item = ({ match }) => <p>This is {match.params.id} Page</p>;
const Items = ({ match }) => (
  <section className="section">
    <div className="row">
      <aside className="col-auto aside">
        <nav className="menu">
          <NavLink to={`${match.url}`} exact className="nav-link" activeClassName="active">Info</NavLink>
          <NavLink to={`${match.url}/item1`} className="nav-link" activeClassName="active">Item1</NavLink>
          <NavLink to={`${match.url}/item2`} className="nav-link" activeClassName="active">Item2</NavLink>
        </nav>
      </aside>
      <article className="col article">
        <Route path={`${match.path}/:id`} component={Item} />
        <Route exact path={match.path} render={() => <p>Items Root Page</p>} />
      </article>
    </div>
  </section>
);

const App = () => (
  <Router>
    <div id="page">
      <header id="header">
        <div className="container">
          <ul className="nav">
            <li><NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/items" activeClassName="active">Items</NavLink></li>
          </ul>
        </div>
      </header>
      <main id="main">
        <div className="container">
          <Route path="/" exact component={Index} />
          <Route path="/items" component={Items} />
        </div>
      </main>
      <footer id="footer">
        <div className="container">
          Built with ReactJS by Sergey Sklyar
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
