import { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context/MyContext';
import { OptionContainer } from './styles'

interface OptionsProps {
  props: string[];
}

function Dropdonw({ props }: OptionsProps) {
  const [selected, setSelected] = useState(props[0]);
  const { setMarket, setCategory, search } = useContext(MyContext);

  useEffect(() => {
    if (props[0] === 'Web') {
      setMarket(selected);
    }
    if (props[0] === 'Categorias') {
      setCategory(selected);
    }
  }, [selected]);

  useEffect(() => {
    if (!search) {
      setSelected(props[0]);
    }
  }, [search]);

  return (
    <OptionContainer
      id="web"
      value={ selected }
      onChange={ ({ target }) => setSelected(target.value) }
    >
      <option className="label" value={ props[0] }>{ props[0] }</option>
      <option value={ props[1] }>{ props[1] }</option>
      <option value={ props[2] }>{ props[2] }</option>
      <option value={ props[3] }>{ props[3] }</option>
    </OptionContainer>
  );
}

export default Dropdonw;
