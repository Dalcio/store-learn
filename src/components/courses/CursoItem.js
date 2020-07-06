import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MyConsumer } from "../../Context";

class CursoItem extends Component {
  render() {
    const { id, nome, cover, info, orientador, preco } = this.props;
    return (
      <MyConsumer>
        {(value) => {
          const { handleDetails } = value;

          return (
            <Div
              className="col-12 col-md-6 col-lg-4 d-md-inline-block"
              onClick={() => {
                handleDetails(id);
              }}
            >
              <Link to="/home/cursos-details">
                <div className=" col-12 m-0 p-0">
                  <Img src={cover} className="cover" alt="" />
                </div>

                <div className="body ">
                  <Link to="/home/cursos-details">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handleDetails(id);
                      }}
                    >
                      {nome}
                    </button>
                  </Link>
                  <h4 className="float-right">{preco} Kz</h4>
                  <h3
                    onClick={() => {
                      handleDetails(id);
                    }}
                  >
                    {nome}
                  </h3>
                  <p>{info.substr(0, 70)}</p>
                  <Orientador>
                    <img src={orientador.img} alt="" />
                    <div className="orientador">
                      <p>Orientado por:</p>
                      <h6>{orientador.nome}</h6>
                    </div>
                    <div className="rank">
                      ****
                      <p>{orientador.nivel} Votos</p>
                    </div>
                  </Orientador>
                </div>
              </Link>
            </Div>
          );
        }}
      </MyConsumer>
    );
  }
}

const Div = styled.div`
  .cover {
    vertical-align: middle;
    border-style: none;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  button {
    border-radius: 0;
    display: inline-block;
  }
  h3 {
    color: var(--gray-dark);
    font-size: 20px;
    font-weight: 600px;
    margin-top: 25px;
    margin-bottom: 10px;
    -webkitransition: 0.5;
    transition: 0.5;
    &:hover {
      cursor: pointer;
      transition: all 1s ease;
      color: var(--success);
    }
  }
  h4 {
    font-size: 18px;
    color: var(--success);
  }
  p {
    color: var(--gray);
    line-height: 1.929;
    font-size: 14px;
    margin-bottom: 0;
    text-align: justify;
  }
  .body {
    border: 1px solid var(--border-gray);
    border-top: unset;
    padding: 20px 15px;
  }
  hr {
    background-color: var(--border-gray);
  }
  h6 {
    font-size: 14px;
  }
`;
const Orientador = styled.div`
  border-top: 1px solid var(--border-gray);
  padding-top: 23px;
  margin-top: 23px;
  img {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 2px;
  }
  .orientador {
    display: inline-block;
  }
  .rank {
    text-align: right;
    float: right;
  }
`;

const Img = styled.img`
  max-width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 992px) {
    height: 230px;
  }
`;
export default CursoItem;
