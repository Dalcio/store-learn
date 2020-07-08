import React, { Component } from "react";
import ProdutoItem from "./ProdutoItem";
import { MyConsumer } from "../../Context";

class Produtos extends Component {
  render() {
    return (
      <MyConsumer>
        {({ produtos, handleProdutoDetails, cartProd }) => {
          return (
            <div className="col-12">
              <div className="container">
                <div className="row">
                  {produtos.map((produto) => {
                    return (
                      <ProdutoItem
                        key={produto.id}
                        {...produto}
                        handleProduto={handleProdutoDetails}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }}
      </MyConsumer>
    );
  }
}

export default Produtos;
