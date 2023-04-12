import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #17181F;
  color: #797AB1;
  min-height: 100vh;
`;

export const Header = styled.div`
  margin: 0;
  color: #fff;
  width: 100%;
  border-bottom: 1px solid #444;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 80%;
    gap: 20px;
    select, button {
      background: #1636c7;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px #1636c7 solid;
      border-radius: 2px;
      padding: 5px;
    }
    input {
      padding: 5px;
      border: 1px solid transparent;
      border-radius: 2px;
      width: 40%;
    }
  }
`;

export const Products = styled.div``;