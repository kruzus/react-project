import styled from 'styled-components';
export const Wrapper = styled.div`
  background-color: #0b2661;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;

  grid-gap: 2rem;
  justify-items: center;
  padding: 2rem 5rem;

  @media only screen and (max-width: 1200px) {
    background-color: #0b2661;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }
`;
