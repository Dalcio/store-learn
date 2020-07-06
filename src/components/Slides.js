import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Slides extends Component {
  render() {
    const { img, display, urlLink, title, description, t } = this.props;
    return (
      <Slide img={img} display={display} t={t} className="col-12 p-0">
        <div className="row ">
          <div className="col-12 col-sm-5">
            <img src={img} alt="" className="fore-ground" />
          </div>
          <div className="col-12 col-sm-7">
            <Link to={urlLink}>
              <div
                className="info col-12 pt-3"
                style={{ textAlign: t ? "center" : "left" }}
              >
                <h2>{title}</h2>
                <div>{description}</div>
                {t ? (
                  ""
                ) : (
                  <button className="btn btn-success w-100">GO!</button>
                )}
              </div>
            </Link>
          </div>
        </div>
      </Slide>
    );
  }
}
const Slide = styled.div`
  display: ${({ display }) => display};
  img {
    width: ${({ t }) => (t ? "80%" : "100%")};
    background-size: cover;
    background-position: center;
    height: ${({ t }) => (t ? "200px" : "200px")};
    vertical-align: middle;
  }
  @media screen and (min-width: 768px) {
    .info {
      text-align: left !important;
      h2 {
        font-size: 32px;
      }
    }
    img {
      height: 300px;
    }
  }
  .info {
    text-align: center;
    h2 {
      color: var(--gray-dark);
      font-size: 22px;
      font-weight: 600px;
    }
    div {
      color: var(--gray);
    }
  }
`;
export default Slides;
