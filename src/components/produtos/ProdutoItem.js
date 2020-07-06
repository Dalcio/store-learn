import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class ProdutoItem extends Component {
  render() {
    const { id, img, nome, preco, handleProduto } = this.props;

    return (
      <Produto className="col-12 col-sm-6 col-lg-4 align-items-center text-center">
        <Link
          to={"/home/produto-details?id=" + id}
          onClick={() => handleProduto(id)}
        >
          <div className="col-12">
            <img src={img} alt="" />
          </div>
          <div className="col-12">
            <h1>{nome}</h1>
            <p>{preco} kz</p>
          </div>
        </Link>
      </Produto>
    );
  }
}

const Produto = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    image-resolution: cover;
  }
  h1 {
    color: var(--gray-dark);
    text-transform: capitalize;
    font-size: 32px;
  }
  p {
    color: var(--success);
    font-size: 14px;
  }
  :hover {
    transition: all 0.7s ease;
    transform: scale(1.06, 1.06);
  }
`;
export default ProdutoItem;
