import { OptionContainer } from './styles'

interface OptionsProps {
  options: string[];
}

function Dropdonw({ options }: OptionsProps) {
  return (
    <OptionContainer className="dropdown">
      <div className="select">
        <span className="selected">{ options[0]}</span>
        <div className="caret"></div>
      </div>
      <ul className="menu">
        <li>{ options[1]}</li>
        <li>{ options[2]}</li>
        <li>{ options[3]}</li>
      </ul>
    </OptionContainer>
  );
}

export default Dropdonw;
