import styled from 'styled-components';
export const Wrapper = styled.main`
  background-color: #0b2661;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;

  grid-gap: 2rem;
  justify-items: center;
  padding: 1rem;

  @media only screen and (max-width: 1220px) {
    background-color: #0b2661;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }
`;
