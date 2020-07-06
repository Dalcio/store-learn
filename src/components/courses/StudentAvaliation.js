import React, { Component } from "react";
import styled from "styled-components";

class StudentAvaliation extends Component {
  render() {
    const { img, nome, classificacao, feedback } = this.props;
    return (
      <Div className="col-12 p-0">
        <div className="row p-0">
          <div className="col-3">
            <img src={img} alt="" />
          </div>
          <div className="col-9">
            <p style={{ color: "var(--gray-dark)" }}>{nome}</p>
            <span className="" style={{ fontSize: "30px" }}>
              <span style={{ color: "var(--warning)" }}>
                {"* ".repeat(classificacao)}
              </span>
              <span>{"* ".repeat(5 - classificacao)}</span>
            </span>
            <p>{feedback}</p>
          </div>
        </div>
      </Div>
    );
  }
}
const Div = styled.div`
  p {
    margin: 0;
    text-transform: capitalize;
    color: var(--gray-dark);
    font-size: 14px;
  }
  img {
    max-width: 100%;
    background-repeat: no-repeat;
  }
`;
export default StudentAvaliation;
