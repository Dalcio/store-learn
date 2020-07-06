import React from "react";
import styled from "styled-components";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function CartBtn({ quantity }) {
  return (
    <Link to="/home/cart">
      <Cart>
        <span id="ico">
          <BsFillBagFill />
        </span>
        <span id="quantity">{quantity}</span>
      </Cart>
    </Link>
  );
}

const Cart = styled.div`
  cursor: pointer;
  #ico {
    cursor: pointer;
  }
  #quantity {
    background-color: var(--success);
    border-radius: 100%;
    width: 20px;
    height: 20px;
    text-align: center;
    color: var(--white);
    font-size: 12px;
    line-height: 19px;
    position: absolute;
  }
`;
export default CartBtn;
