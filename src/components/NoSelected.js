import styled from "styled-components";

export const NoSelected = styled.div`
  height: 50vh;
  h2 {
    font-size: 32px;
    color: var(--gray-dark);
    margin-top: 25vh;
    font-weight: 600px;
  }
  p {
    text-transform: uppercase;
    color: var(--gray-dark);
    :hover {
      color: var(--success);
      transition: all 0.5s ease-in-out;
    }
  }
`;
