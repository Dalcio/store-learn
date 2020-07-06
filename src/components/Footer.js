import React, { Component } from "react";
import styled from "styled-components";
import { BsGeoAlt, BsPhone, BsFillEnvelopeFill } from "react-icons/bs";
import { FiArrowRightCircle, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

import imagem from "./logica.jpeg";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  submitHandler(event) {
    /*let email = */
  }

  inputChangeHandler(event) {
    let nam = event.target.name;
    let value = event.target.value;

    this.setState({ [nam]: value });
  }
  render() {
    return (
      <Div>
        <div className="container">
          <div className="row pt-4 ">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-justify">
              <h2>Sobre Nós</h2>
              <p>
                Consequat id occaecat irure fugiat sint laboris et commodo
                voluptate anim cillum velit. Anim laborum sunt exercitation
                cupidatat est. Enim dolore laborum amet id. Magna cillum
                deserunt et occaecat minim aliquip sit deserunt enim commodo.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <h2>Fique Ligado</h2>
              <p>Seje o primeiro a saber sobre os novos produtos</p>
              <form className="col-12 p-0" onSubmit={this.mySubmitHandler}>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o email"
                  className="form-control bg-transparent float-left mr-2 "
                  onChange={this.inputChangeHandler.bind}
                />
                <button type="submit" className="btn btn-success float-left">
                  enviar
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-7 col-md-5  col-lg-3">
              <h2>Última Publicação</h2>
              <Recent>
                <img src={imagem} alt="" />
                <div>
                  <p>Curso de Lógica</p>
                  <span>
                    <FiClock className="ico" /> 5 min
                  </span>
                  <span className="read-more">
                    <FiArrowRightCircle className="ico" /> Read fire
                  </span>
                </div>
              </Recent>
            </div>
            <div className="col-12  col-sm-5 col-md-3 col-lg-2">
              <h2>Navegação</h2>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/produtos">Produtos</Link>
              </p>
              <p>
                <Link to="/cursos">Cursos</Link>
              </p>
              <p>
                <Link to="contactos">Contactos</Link>
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <h2>Nos Contacte</h2>
              <p>
                <BsGeoAlt className="ico" /> Talatona, Luanda Angola
              </p>
              <p id="phone">
                <BsPhone className="ico" /> +244 xxx-xxx-xxx
              </p>
              <p>
                <BsFillEnvelopeFill className="ico" />{" "}
                email.support@angola.co.ao
              </p>
            </div>
            <div className="col-12 text-center">
              <hr />
              <p className="mt-5">
                Copyright © 2020 All rights reserved | This site is made with
                <span></span> ✌ by Dálcio Garcia & Montana
              </p>
            </div>
          </div>
        </div>
      </Div>
    );
  }
}

const Div = styled.div`
  width: 100%;
  margin-top: 20px;
  bottom: 0 !important;
  background-color: var(--dark);
  color: var(--gray);
  h2 {
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 17px;
  }
  .ico {
    color: var(--white);
    margin-right: 10px;
  }
  #phone:hover {
    cursor: pointer;
    color: var(--white);
    transition: all 0.5s ease;
  }
  a {
    color: var(--gray);
    &:hover {
      color: var(--white);
      transition: all 0.03s ease-in-out;
    }
  }
  input[name="email"] {
    width: calc(100% - 80px);
  }
  @media screen and (max-width: var(--breakpoints-md)) {
  }
  div {
    transition: all 0.5s linear;
  }
`;

const Recent = styled.div`
  img {
    border-radius: 10px;
    float: left;
    width: 67px;
    height: 67px;
    margin-right: 20px;
  }
  div {
    float: left;
    p {
      color: var(--white);
    }
    .ico {
      margin: 0 2px 0 10px;
    }
    span {
      line-height: 21px;
    }
    .read-more {
      &:hover {
        cursor: pointer;
        color: var(--white);
      }
    }
  }
  input:focus {
    color: var(--light) !important;
  }
`;
export default Footer;
