import React from "react";
import styled from "styled-components";
import headerImg from "./logica.jpeg";

function PageHeader({ title, path }) {
  return (
    <Section img={headerImg}>
      <div>
        <h2>{title}</h2>
        <p>{path}</p>
      </div>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 450px;
  background-image: URL(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);

  margin-bottom: 3rem;
  text-transform: capitalize;
  text-align: center;
  div {
    height: 450px;
    padding-top: 193px;
    background-color: rgba(0, 0, 0, 0.78);
  }
`;
export default PageHeader;
