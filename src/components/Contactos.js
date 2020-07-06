import React, { Component } from "react";
import PageHeader from "./PageHeader";
import styled from "styled-components";

class Contactos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      email: "",
      assunto: "",
      mensagem: "",
    };
  }

  inputHandler = (event) => {
    const fildName = event.target.name;
    const fildValue = event.target.value;
    if (fildName === "nome" || fildName === "sobrenome") {
    }
    this.setState({
      [fildName]: fildValue,
    });
  };

  onSubmit = (event) => {
    Object.keys(this.state).map((item) => {
      console.log("=> " + item);
    });
    console.log("submeter");
  };

  render() {
    return (
      <div>
        <PageHeader title="Contactos" path="Home / Contactos" />
        <div className="container">
          <Div className="row">
            <div className="col-12">
              <form className="form" onSubmit={this.onSubmit}>
                <div className="form-group p-0 pr-md-2 mb-3 mt-3 col-md-6 d-md-inline-block">
                  <label htmlFor="nome">
                    Nome <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    id="nome"
                    required
                    onChange={this.inputHandler}
                  />
                </div>
                <div className="form-group p-0 pl-md-2 mb-3 mt-3 col-md-6 d-md-inline-block">
                  <label htmlFor="sobrenome">
                    Sobrenome <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="sobrenome"
                    className="form-control"
                    id="name"
                    required
                    onChange={this.inputHandler}
                  />
                </div>
                <div className="form-group  mb-3 mt-3">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    required
                    onChange={this.inputHandler}
                  />
                </div>
                <div className="form-group mb-3 mt-3 ">
                  <label htmlFor="assunto">Assunto</label>
                  <input
                    type="text"
                    id="assunto"
                    className="form-control"
                    onChange={this.inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    name="mensagem"
                    className="form-control"
                    id="mensagem"
                    cols="30"
                    rows="9"
                    onChange={this.inputHandler}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg btn-success col-12 mb-3 "
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </Div>
        </div>
      </div>
    );
  }
}

const Div = styled.div`
  h2 {
    font-size: 27px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  label span {
    color: var(--danger);
  }
  input:focus,
  textarea:focus {
    border-color: var(--success);
    color: var(--dark);
  }

  input,
  textarea {
    &:hover {
      border-color: var(--success);
    }
  }
`;
export default Contactos;
