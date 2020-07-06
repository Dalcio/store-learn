import React, { Component } from "react";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import { MyConsumer } from "../../Context";
import { produtos } from "../../DadosDosProdutos";
import styled from "styled-components";

class Cart extends Component {
  render() {
    return (
      <MyConsumer>
        {(value) => {
          const { cartProd, incrementProd, decreaseProd, remFromCart } = value;
          return (
            <div className="container">
              <div className="row">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th>Remover</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProd.map((produto) => {
                        return (
                          <Tr key={produto.id}>
                            <td>
                              <div className="col-12">
                                <img
                                  src={produto.img}
                                  alt=""
                                  style={{ width: "50%" }}
                                />
                              </div>
                              <div className="col-12">{produto.nome}</div>
                            </td>
                            <td>{produto.preco} kz</td>
                            <td>
                              <button
                                className="btn btn-sm btn-success bg-transparent"
                                style={{ color: "var(--success)" }}
                                onClick={() => decreaseProd(produto.id)}
                              >
                                <BsDash />
                              </button>{" "}
                              {produto.quantity}{" "}
                              <button
                                className="btn btn-sm btn-success bg-transparent"
                                style={{ color: "var(--success)" }}
                                onClick={() => incrementProd(produto.id)}
                              >
                                <BsPlus />
                              </button>
                            </td>
                            <td>{produto.total}</td>
                            <td>
                              <button
                                className="btn rem btn-success"
                                onClick={() => {
                                  remFromCart(produto.id);
                                }}
                              >
                                <BsTrash />
                              </button>
                            </td>
                          </Tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h1>PayPal</h1>
                </div>
              </div>
            </div>
          );
        }}
      </MyConsumer>
    );
  }
}

const Tr = styled.tr`
  .btn-success {
    &:hover {
      background-color: var(--success) !important;
      color: var(--white) !important;
      transition: all 1s ease;
    }
  }
  .rem {
    &:hover {
      background-color: var(--danger) !important;
      transition: all 1s ease;
      border-color: var(--danger) !important;
    }
  }
`;
export default Cart;
