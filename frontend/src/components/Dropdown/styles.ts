import styled from 'styled-components';

export const OptionContainer = styled.div`
  min-width: 15em;
  position: relative;
  margin: 2em;
  .dropdown * {
    box-sizing: border-box;
  }
  .select {
    background: #2a2f3b;
    color: #fff;
    display: flex;
    justify-content: space-between:
    align-items: center;
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 5px;
  }
  .select:hover {
    background: #323741;
  }
  .select-clicked {
    border: 2px #26489a solid;
    box-shadow: 0 0 0.8em #26489a;
  }
  .caret {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
    transition: 0.3s;
  }
  .caret-rotate {
    transform: rotate(180deg);
  }
  .menu {
    list-style: none;
    padding: .2em .5em;
    background: #323741;
    border: 1px solid transparent;
    border-radius: 2px;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 3em;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    opacity: 0;
    display: none;
    transition: .2s;
    z-index: 1;
  }
  .menu li {
    padding: .7em .5em;
    margin: .3em 0;
    border-radius: 2px;
  }
  .menu li:hover {
    background: #2a2d35;
  }
  .active {
    background: #23242a;
  }
  .menu-open {
    display: block;
    opacity: 1;
  }
`;