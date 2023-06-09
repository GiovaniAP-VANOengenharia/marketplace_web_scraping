import styled from 'styled-components';

export const OptionContainer = styled.select`
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
  option {
    background: #fff;
    color: #000;
    border: 1px solid transparent;
    border-radius: 50px;
    box-shadow: 0 0 5em 1 rgba(0, 0, 0, 1);
  }
`;