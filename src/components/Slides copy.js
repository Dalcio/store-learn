import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Slides extends Component {
  render() {
    const {
      indicator,
      img,
      size,
      display,
      urlLink,
      title,
      description,
    } = this.props;
    return (
      <Slide img={img} display={display}>
        <div className="fore-ground">
          <div className="number">{indicator + 1 + " / " + size}</div>
          <Link to={urlLink}>
            <div className="col-12 info">
              <h2>{title}</h2>
              <div className="d-none d-sm-block">{description}</div>
            </div>
          </Link>
        </div>
      </Slide>
    );
  }
}
const Slide = styled.div`
  display: ${({ display }) => display};
  width: 100%;
  height: 450px;
  background-image: URL(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
  @-webkit-keyframes fade {
    form {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  .fore-ground {
    width: 100%;
    height: 450px;
    background-color: rgba(0, 0, 0, 0.5);
    .number {
      color: var(--white);
      padding: 15px;
    }
  }

  .info {
    color: var(--white);
    text-align: center;
    margin-top: 250px;
    h2 {
      font-size: 32px;
      font-weight: 600px;
    }
    div {
      color: var(--input-gray);
    }
  }
`;
export default Slides;
