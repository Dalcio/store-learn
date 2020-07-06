import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Produtos from "./components/produtos/Produtos";
import CursosHome from "./components/courses/CursosHome";
import Contactos from "./components/Contactos";
import Default from "./components/Default";
import Footer from "./components/Footer";
import CursoDetails from "./components/courses/CursoDetails";
import ProdutoDetails from "./components/produtos/ProdutoDetails";
import Cart from "./components/produtos/Cart";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => {
            return <Home />;
          }}
        />
        <Route
          path="/home/produtos"
          render={(routeProps) => {
            return <Produtos />;
          }}
        />
        <Route
          path="/home/cursos"
          render={(routeProps) => {
            return <CursosHome />;
          }}
        />
        <Route
          path="/home/contactos"
          render={(routeProps) => {
            return <Contactos />;
          }}
        />
        {/*****sub-folders****/}
        <Route path="/home/cursos-details" component={CursoDetails} />
        <Route path="/home/cart" component={Cart} />
        <Route path="/home/produto-details" component={ProdutoDetails} />
        {/***any other route***/}
        <Route
          render={(routeProps) => {
            return <Default />;
          }}
        />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
