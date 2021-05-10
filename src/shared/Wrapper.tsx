import styled from 'styled-components';
export const Wrapper = styled.div`
  background-color: #0b2661;
  /* display: grid;
  border: 10px solid black;
  margin: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  padding: 5em;
  grid-gap: 2rem; */

  width: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  gap: 1rem;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    background-color: #0b2661;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }
`;
