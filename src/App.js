import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/body/LandingPage";
import NavigationBar from "./components/head/NavigationBar";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
