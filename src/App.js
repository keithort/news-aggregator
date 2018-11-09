import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Feed from "./Components/Feed";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  <Provider store={store}>
    <Route
      render={({ location }) => (
        <>
          <Header />
          <Layout>
            <PoseGroup>
              <RouteContainer key={location}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} key="home" />
                  <Route
                    exact
                    path="/science"
                    render={props => <Feed type="Science" />}
                    key="science"
                  />
                  <Route
                    exact
                    path="/sports"
                    render={props => <Feed type="Sports" />}
                    key="sports"
                  />
                  <Route
                    exact
                    path="/technology"
                    render={props => <Feed type="Technology" />}
                    key="technology"
                  />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </Layout>
          <Footer />
        </>
      )}
    />
  </Provider>
);

export default App;
