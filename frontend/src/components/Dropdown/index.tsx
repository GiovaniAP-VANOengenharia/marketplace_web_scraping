import { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context/MyContext';
import { OptionContainer } from './styles'
import { urls, categories } from '../../services/urls';

interface OptionsProps {
  props: string[];
}

function Dropdonw({ props }: OptionsProps) {
  const [selected, setSelected] = useState(props[0]);
  const { data, setData, cat, setCat, search } = useContext(MyContext);

  const cm = categories.mercadoLivre;
  const cb = categories.buscape;

  useEffect(() => {    
    if (props[0] === 'Web') {
      let web: string[] = [''];
      let url: string[] = [''];
      if (selected === props[1]) {
        web = [props[2], props[3]];
        url = [`${urls[0]}${cat[0]}`, `${urls[1]}${cat[1]}`];
      }
      if (selected === props[2]) {
        web = [props[2]];
        url = [`${urls[0]}${cat[0]}`];
      }
      if (selected === props[3]) {
        web = [props[3]];
        url = [`${urls[1]}${cat[0]}`];
      }
      setData({ ...data, web, url })
    }
    if (props[0] === 'Categorias') {
      let category: string[] = [''];
      let url: string[] = ['', ''];
      props.forEach((prop, index) => {
        if (url.length > 1 && prop === selected) {
          setCat([cm[index - 1], cb[index - 1]]);
          category = [prop];
          url = [`${urls[0]}${cm[index - 1]}`, `${urls[1]}${cb[index - 1]}`];
        } else if (url[0].includes(urls[0]) && prop === selected) {
          setCat([cm[index - 1]]);
          category = [props[2]];
          url = [`${urls[0]}${cm[index - 1]}`];
        } else if (url[0].includes(urls[1]) && prop === selected) {
          setCat([cb[index - 1]]);
          category = [props[3]];
          url = [`${urls[1]}${cb[index - 1]}`];
        }
      });
      setData({ ...data, url, category })
    };
  }, [selected]);

  useEffect(() => {
    if (!search) {
      setSelected(props[0]);
      setCat([]);
      setData({});
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
