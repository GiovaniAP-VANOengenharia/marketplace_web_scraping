import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  background: none;
  justify-content: space-around;
  align-items: space-around;
  color: #797AB1;
  width: 45%;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin: 10px 0;
  .img{
    height: 200px;
    padding: 20px 10px 20px 20px ;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  img {
    height: 200px;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  .description {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px 20px 10px ;
    .title {
      font-size: 30px;
    }
    .desc {
      justify-self: flex-end; 
      align-self: flex-end;
      font-size: 20px;
    }
    .price {
      justify-self: flex-end; 
      align-self: flex-start;
      font-size: 20px;
    }
  }
  .button{
    display: flex;
    align-items: center;
    width: 20%;
    margin: 0 10px;
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