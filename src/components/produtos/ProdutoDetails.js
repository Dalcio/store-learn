import React, { Component } from "react";
import { MyConsumer } from "../../Context";
import styled from "styled-components";
import { BsFillBagFill } from "react-icons/bs";
import CartBtn from "./CartBtn";
import { Link } from "react-router-dom";
import { NoSelected } from "../NoSelected";

class ProdutoDetails extends Component {
  render() {
    return (
      <MyConsumer>
        {({ produtoDetails, produtos, addToCart, remFromCart, cartProd }) => {
          /*/*const produtoDetails = 0;*/

          let selectedProd = produtos.find(
            (produto) => produto.id === produtoDetails
          );
          return (
            <div>
              {produtoDetails === null ? (
                <NoSelected className="col-12 text-center">
                  <h2>Nenhum Produto Selecionado</h2>
                  <Link to="/home/produtos">
                    <p>ir pra produtos</p>
                  </Link>
                </NoSelected>
              ) : (
                <div className="col-12">
                  <Details className="container p-0">
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <img src={selectedProd.img} alt="" />
                      </div>
                      <div className="col-12 col-md-8">
                        <h3>{selectedProd.nome}</h3>
                        <div className="info">{selectedProd.info}</div>
                        <h4>{selectedProd.preco} kz</h4>
                        <button
                          className={`btn btn-${
                            !selectedProd.inCart ? "success" : "danger"
                          } btn-lg col-12 col-sm-7`}
                          onClick={() => {
                            selectedProd.inCart
                              ? remFromCart(selectedProd.id)
                              : addToCart(selectedProd.id);
                          }}
                        >
                          {selectedProd.inCart ? "Remover" : "Add To Cart"}
                        </button>
                        <Link to="/home/cart">
                          <button className="btn btn-secondary ml-sm-1 col-12 col-sm-4 btn-lg">
                            Go to Cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Details>
                </div>
              )}
            </div>
          );
        }}
      </MyConsumer>
    );
  }
}

const Details = styled.div`
  img {
    width: 100%;
  }

  .info {
    font-size: 14px;
    color: var(--gray-dark);
  }

  h3 {
    font-size: 28px;
    color: var(--gray-dark);
    font-weight: 700px;
    text-transform: capitalize;
  }

  h4 {
    padding-top: 30px;
    font-size: 22px;
    color: var(--success);
    font-weight: 700px;
  }

  .preco {
    font-size: 30px;
  }

  .btn {
    text-transform: uppercase;
  }
`;

export default ProdutoDetails;
