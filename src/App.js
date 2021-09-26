import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/body/LandingPage";
import ProductDetail from "./components/body/product/productDetail/ProductDetail";
import NavigationBar from "./components/head/NavigationBar";
import userComp from "./components/userComp/userComp";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/detail" component={ProductDetail} />
            <Route exact path="/user" component={userComp} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
