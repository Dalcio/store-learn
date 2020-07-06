import React, { Component } from "react";
import styled from "styled-components";
import { BsList, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartBtn from "./produtos/CartBtn";
import { MyConsumer } from "../Context";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
    };
  }
  changeDisplay() {
    this.setState({
      display: this.state.display === "none" ? "block" : "none",
    });
  }

  displayNone() {
    this.setState({
      display: "none",
    });
  }

  render() {
    window.onclick = (event) => {
      if (event.target.id === "nav-bar") {
        this.displayNone();
      }
    };
    const { display } = this.state;

    return (
      <MyConsumer>
        {({ cartProd }) => (
          <Div>
            <div className="site-logo ">
              <Link to="/" onClick={() => this.displayNone()}>
                Montana
              </Link>
            </div>
            <div className="toggle">
              {display === "block" ? (
                <BsX onClick={() => this.changeDisplay()} />
              ) : (
                <BsList onClick={() => this.changeDisplay()} />
              )}
            </div>
            <Nav className={`text-md-center  d-${display}`}>
              <ul className="">
                <Link to="/">
                  <li onClick={() => this.displayNone()}>Home</li>
                </Link>
                <Link to="/home/produtos">
                  <li onClick={() => this.displayNone()}>Produtos</li>
                </Link>
                <Link to="/home/cursos">
                  <li onClick={() => this.displayNone()}>Cursos</li>
                </Link>
                <Link to="/home/contactos">
                  <li onClick={() => this.displayNone()}>Contactos</li>
                </Link>
              </ul>
            </Nav>
            <div className="cart">
              <CartBtn quantity={cartProd.length} />
            </div>
          </Div>
        )}
      </MyConsumer>
    );
  }
}

const Div = styled.div`
  .site-logo {
    display: inline-block;
    @media screen and (max-width: 768px) {
      /* width: calc(100% - 100px);*/
      float: left;
    }
  }
  .cart {
    display: inline-block;
    @media screen and (max-width: 768px) {
      width: calc(100% - 120px);
      float: left;
      line-height: 30px;
      padding-left: calc(100% - 170px);
    }
  }
  .toggle {
    display: none;
    @media screen and (max-width: 768px) {
      cursor: pointer;
      font-size: 30px;
      line-height: 30px;
      display: inline-block;
    }
  }
  a {
    color: var(--dark);
    &:hover {
      text-decoration: none;
    }
  }
  heigth: 46px;
  padding: 20px 15px;
`;
const Nav = styled.nav`
  transform: uppercase;
  ul li {
    cursor: pointer;
    font-size: 15px;
    display: inline-block;
    padding: 0 15px;
    &:hover {
      color: var(--success);
      transition: all 0.5s ease-in-out;
    }
  }
  @media screen and (max-width: 768px) {
    left: 0;
    width: 100%;
    text-align: left !important;
    padding: 10px 15px;
    ul {
      width: 100%;
      padding: 40px 30px;
      background-color: var(--black);
    }
    ul li {
      display: block;
      border-radius: 3px;
      padding: 5px 10px;
      margin: 15px 5px;
      &:hover {
        transition: all 0.5s ease-in-out;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    a {
      color: var(--white) !important;
    }
    position: absolute;
    z-index: 1;
    -webkit-animation-name: fade;
    -webkit-animation-duration: 0.3s;
    animation-name: fade;
    animation-duration: 0.3s;
    @-webkit-keyframes fade {
      0% {
        top: -200px;
      }
      25% {
        top: -150px;
      }
      50% {
        top: -100px;
      }
      75% {
        top: -50px;
      }
      100% {
        top: 0px;
      }
    }
    @keyframes fade {
      0% {
        top: -200px;
      }
      25% {
        top: -150px;
      }
      50% {
        top: -100px;
      }
      75% {
        top: -50px;
      }
      100% {
        top: 0px;
      }
    }
  }
  @media screen and (min-width: 769px) {
    display: inline-block !important;
    width: 85%;
    text-align: center;
    ul {
      padding-top: 15px;
    }
    ul li {
      font-size: 19.5px;
    }
  }
`;
export default Header;
