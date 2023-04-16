import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #17181F;
  color: #797AB1;
  width: 95%;
  min-height: 93vh;
  border: 1px solid #aaa;
`;

export const Header = styled.div`
  margin: 0;
  color: #fff;
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
    button {
      min-width: 10em;
      background: #1636c7;
      color: #fff;
      display: flex;
      font-size: 15px;
      justify-content: center;
      align-items: center;
      border: 1px #1636c7 solid;
      border-radius: 2px;
      padding: 5px;
    }
    .label {
      opacity: 0;
      display: none;
    }
    button:disabled {
      opacity: 0.5;
    }
    input {
      padding: 5px;
      border: 1px solid transparent;
      border-radius: 2px;
      width: 40%;
    }
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;