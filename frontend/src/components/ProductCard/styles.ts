import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  background: none;
  justify-content: space-around;
  gap: 10px;
  align-items: space-around;
  color: #797AB1;
  width: 45%;
  border: 1px solid #aaa;
  img {
    height: 200px;
    padding: 20px 10px 20px 20px ;
  }
  .description {
    padding: 20px 20px 20px 10px ;
  }
  .button{
    display: flex;
    align-items: center;
  }
  button {
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
`;