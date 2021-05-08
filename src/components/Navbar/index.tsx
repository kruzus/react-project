import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import React from 'react';
import { Root } from '@components/Root';
import { Feed } from '@components/Feed';
import { Users } from '@components/Users';

import './style.scss';

export const Navbar = () => {
  return (
    <>
      <Router>
        <nav className="navcont noselect">
          <h3 className="logo">Skoozles!</h3>
          <div className="links">
            <Link className="item" to="/">
              Home
            </Link>
            <Link className="item" to="/feed">
              Feed
            </Link>
            <Link className="item" to="/users">
              Users
            </Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Root />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

function NoMatch() {
  let location = useLocation();
  return (
    <>
      No match for <code>{location.pathname}</code>
    </>
  );
}
