import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Layout>
              <Route path="/" exact render={() => <Main page="home"/>} />
              <Route path="/about" exact render={() => <Main page="about"/>} />
              <Route path="/contacts" exact render={() => <Main page="contacts"/>} />
              <Route path="/team" exact render={() => <Main page="team"/>} />
              <Route path="/admin" exact render={() => <Main page="admin"/>} />
            </Layout>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
