import { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context/MyContext';
import { OptionContainer } from './styles'
import { urls, categories } from '../../services/urls';

interface OptionsProps {
  props: string[];
}

function Dropdonw({ props }: OptionsProps) {
  const [selected, setSelected] = useState(props[0]);
  const { data, cat, setCat, setData, search } = useContext(MyContext);

  const cm = categories.mercadoLivre;
  const cb = categories.buscape;

  useEffect(() => {    
    if (props[0] === 'Web') {
      let web: string[] = [''];

      if (selected === props[1]) web = [props[2], props[3]];
      else if (selected === props[2]) web = [props[2]];
      else if (selected === props[3]) web = [props[3]];
      
      setCat('');
      setData({ ...data, web });
    }

    if (props[0] === 'Categorias') {
      const category = selected;
      setCat(selected);
      setData({ ...data, category });
    }
  }, [selected]);

  useEffect(() => {
    if (data.web !== undefined && data.category !== undefined) {
      let url: string[] = ['', ''];

      ['Geladeira', 'TV', 'Celular'].forEach((prop, index) => {
      if (data.web.length > 1 && prop === selected) {
        url = [`${urls[0]}${cm[index]}`, `${urls[1]}${cb[index]}`];
      } else if (data.web[0] === 'MercadoLivre' && prop === selected) {
        url = [`${urls[0]}${cm[index]}`];
      } else if (data.web[0] === 'Buscapé' && prop === selected) {
        url = [`${urls[1]}${cb[index]}`];
      }
    });
      setData(() => ({ ...data, url }));
    }
  }, [cat]);

  useEffect(() => {
    if (!search) {
      setSelected(props[0]);
    }
    setCat('cat');
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
