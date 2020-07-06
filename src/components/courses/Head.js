import styled from "styled-components";

export const Head = styled.div`
  p {
    color: varr(--gray);
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 11px;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 32px;
    color: var(--gray-dark);
    line-height: 37px;
    font-weight: 600px;
    position: relative;
  }
  h2::after {
    position: absolute;
    content: "";
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    width: 80px;
    height: 2px;
    background-color: var(--success);
  }
`;
